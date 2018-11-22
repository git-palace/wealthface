const User = require('../../models/User');
const Token = require('../../models/Token');
const crypto = require('crypto');

require('dotenv').config()

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendVerificationEmail = (email, token) => {
    let verificationLink = process.env.host + '/confirm-email/' + token;

    const msg = {
        to: email,
        from: 'info@wealthface.com',
        subject: 'Verify your account',
        text: verificationLink,
        html: '<a href=' + verificationLink + '>' + verificationLink + '</a>',
    };

    sgMail.send(msg);
};

module.exports = (app) => {
    app.post('/api/user/signup', (req, res, next) => {
        let params = req.body;

        if (!params['firstName']) {
            return res.status(400).send({
                success: false,
                message: 'Error: First name cannot be blank.'
            });
        }

        if (!params['lastName']) {
            return res.status(400).send({
                success: false,
                message: 'Error: Last name cannot be blank.'
            });
        }

        if (!params['email']) {
            return res.status(400).send({
                success: false,
                message: 'Error: Email cannot be blank.'
            });
        }

        if (!params['password']) {
            return res.status(400).send({
                success: false,
                message: 'Error: Password cannot be blank.'
            });
        }

        let email = params['email'].toLowerCase().trim();


        User.find({
            email: email
        }, (err, previousUsers) => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: 'Error: Server error.'
                });
            } else if (previousUsers.length) {
                return res.status(500).send({
                    success: false,
                    message: 'Error: Account already exists.'
                });
            }

            // Save the new user
            const newUser = new User();

            newUser.firstName = params['firstName'];
            newUser.lastName = params['lastName'];
            newUser.email = email;
            newUser.passwordHash = newUser.generateHash(params['password']);
            newUser.notUSTax = params['notUSTax'];

            newUser.save((err, user) => {
                if (err) {
                    return res.status(500).send({
                        success: false,
                        message: 'Error: Server error'
                    });
                }

                let token = new Token({
                    _userId: user._id,
                    token: crypto.randomBytes(16).toString('hex')
                });

                token.save(function (err) {
                    if (err) {
                        return res.status(500).send({
                            message: err.message
                        })
                    }

                    sendVerificationEmail(user.email, token.token);

                    user = Object.assign(user.toObject(), { token: user.createToken() });
                    delete user.passwordHash;

                    return res.status(200).send({
                        success: true,
                        user: user,
                        message: 'Waiting v-email confirmation.'
                    });
                });
            });
        });
    });

    app.post('/api/user/signin', (req, res, next) => {
        let params = req.body;

        User.findOne({ email: params['email'] }, (err, user) => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: 'Error: Server Error.'
                })
            }

            if (!user.validPassword(params['password'])) {
                return res.status(400).send({
                    success: false,
                    message: 'Error: Credentials are wrong'
                });
            }

            user = Object.assign(user.toObject(), { token: user.createToken() });
            delete user.passwordHash;

            return res.status(200).send({
                success: true,
                user: user,
                message: 'Signed In'
            })
        });
    });
};