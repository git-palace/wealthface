const User = require('../../models/User');

module.exports = (app) => {
    app.post('/api/user/signup', (req, res, next) => {
        let params = req.body;

        if (!params['first_name']) {
            return res.send({
                success: false,
                message: 'Error: First name cannot be blank.'
            });
        }

        if (!params['last_name']) {
            return res.send({
                success: false,
                message: 'Error: Last name cannot be blank.'
            });
        }

        if (!params['email']) {
            return res.send({
                success: false,
                message: 'Error: Email cannot be blank.'
            });
        }

        if (!params['password']) {
            return res.send({
                success: false,
                message: 'Error: Password cannot be blank.'
            });
        }

        let email = params['email'].toLowerCase().trim();


        User.find({
            email: email
        }, (err, previousUsers) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error: Server error.'
                });
            } else if (previousUsers.length) {
                return res.send({
                    success: false,
                    message: 'Error: Account already exists.'
                });
            }

            // Save the new user
            const newUser = new User();

            newUser.first_name = params['first_name'];
            newUser.last_name = params['last_name'];
            newUser.email = email;
            newUser.password_hash = newUser.generateHash(params['password']);
            newUser.not_us_tax = params['not_us_tax'];

            newUser.save((err, user) => {
                if (err) {
                    return res.send({
                        success: false,
                        message: 'Error: Server error'
                    });
                }

                delete user.password_hash;

                return res.send({
                    success: true,
                    user: user,
                    message: 'Waiting v-email confirmation.'
                });
            });
        });
    });
};