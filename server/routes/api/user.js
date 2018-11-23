const User = require('../../models/User')
const Token = require('../../models/Token')
const crypto = require('crypto')

require('dotenv').config()

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendVerificationEmail = (email, token) => {
    let verificationLink = process.env.HOST + '/confirm-email/' + token

    const msg = {
        to: email,
        from: 'info@wealthface.com',
        subject: 'Verify your account',
        text: verificationLink,
        html: '<a href=' + verificationLink + '>' + verificationLink + '</a>',
    }

    sgMail.send(msg)
}

module.exports = (app) => {
    app.post('/api/user/signup', (req, res, next) => {
        let params = req.body

        if (!params['firstName']) {
            return res.status(400).send({
                success: false,
                message: 'Error: First name cannot be blank.'
            })
        }

        if (!params['lastName']) {
            return res.status(400).send({
                success: false,
                message: 'Error: Last name cannot be blank.'
            })
        }

        if (!params['email']) {
            return res.status(400).send({
                success: false,
                message: 'Error: Email cannot be blank.'
            })
        }

        if (!params['password']) {
            return res.status(400).send({
                success: false,
                message: 'Error: Password cannot be blank.'
            })
        }

        let email = params['email'].toLowerCase().trim()


        User.find({
            email: email
        }, (err, previousUsers) => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: 'Error: Server error.'
                })
            } else if (previousUsers.length) {
                return res.status(500).send({
                    success: false,
                    message: 'Error: Account already exists.'
                })
            }

            // Save the new user
            const newUser = new User()

            newUser.firstName = params['firstName']
            newUser.lastName = params['lastName']
            newUser.email = email
            newUser.passwordHash = newUser.generateHash(params['password'])
            newUser.notUSTax = params['notUSTax']

            newUser.save((err, user) => {
                if (err) {
                    return res.status(500).send({
                        success: false,
                        message: 'Error: Server error'
                    })
                }

                let token = new Token({
                    _userId: user._id,
                    token: crypto.randomBytes(16).toString('hex')
                })

                token.save(function (err) {
                    if (err) {
                        return res.status(500).send({
                            message: err.message
                        })
                    }

                    sendVerificationEmail(user.email, token.token)

                    token = user.createToken()
                    user = user.toObject()
                    delete user.passwordHash

                    return res.status(200).send({
                        success: true,
                        token: token,
                        user: user,
                        message: 'Waiting v-email confirmation.'
                    })
                })
            })
        })
    })

    app.post('/api/user/signin', (req, res, next) => {
        let params = req.body

        User.findOne({ email: params['email'] }, (err, user) => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: 'Error: Server Error.'
                })
            }

            if (!user) {
                return res.status(400).send({
                    success: false,
                    message: 'Error: User is not existing.'
                })
            }

            if (!user.validPassword(params['password'])) {
                return res.status(400).send({
                    success: false,
                    message: 'Error: Credentials are wrong'
                })
            }

            token = user.createToken()
            user = user.toObject()
            delete user.passwordHash

            return res.status(200).send({
                success: true,
                token: token,
                user: user,
                message: 'Signed In'
            })
        })
    })

    app.post('/api/user/parse-token', (req, res, next) => {
        let params = req.body

        let user = User.parseToken(params['token'])

        if (!user) {
            return res.status(500).send({
                success: false,
                message: 'Error: Token is not existing'
            })
        }

        delete user.passwordHash

        return res.status(200).send({
            success: true,
            token: params['token'],
            user: user,
            message: 'Signed In'
        })
    })

    app.post('/api/user/resend-verficaition-email', (req, res, next) => {
        let token = req.headers.authorization.replace('Token ', '')

        let user = User.parseToken(token)

        token = new Token({
            _userId: user._id,
            token: crypto.randomBytes(16).toString('hex')
        })

        token.save(function (err) {
            if (err) {
                return res.status(500).send({
                    message: err.message
                })
            }

            sendVerificationEmail(user.email, token.token)

            return res.status(200).send({
                success: true
            })
        })
    })

    app.post('/api/user/verify-email', (req, res, next) => {
        Token.findOne({
            token: req.body['vEmailtoken']
        }, (err, token) => {
            if (err) {
                return res.status(500).send({
                    message: err.message
                })
            }

            if (!token) {
                return res.status(400).send({
                    success: false,
                    message: 'We were unable to find a valid token. Your token my have expired.'
                });
            }

            User.findOne({
                _id: token._userId,
                email: req.body['email']
            }, (err, user) => {
                if (err) {
                    return res.status(500).send({
                        message: err.message
                    })
                }

                if (!user) {
                    return res.status(400).send({
                        success: false,
                        message: 'We were unable to find a user for this token.'
                    });
                }

                if (user.isVerified) {
                    return res.status(400).send({
                        success: false,
                        message: 'This user has already been verified.'
                    });
                }

                user.isVerified = true;
                user.save(function (err) {
                    if (err) {
                        return res.status(500).send({
                            message: err.message
                        });
                    }

                    token = user.createToken()
                    user = user.toObject()
                    delete user.passwordHash

                    res.status(200).send({
                        success: true,
                        token: token,
                        user: user,
                        message: 'Email verified'
                    });
                });
            })
        })
    })
}