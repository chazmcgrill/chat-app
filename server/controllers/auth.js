const User = require('../models/user');

exports.signup = function(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    // check db for email
    User.findOne({ email: email }, function(err, existingUser) {
        if (err) return next(err);
        if (!email || !password) {
            return res.status(422).send({
                error: 'Email and password are required.'
            });
        }
        if (existingUser) {
            return res.status(422).send({
                error: 'Email already in use.'
            });
        }
        // if email unique create user save record
        const user = new User({ email: email, password: password });
        user.save(function(err) {
            if (err) return next(err);
            res.send(user);
        })
    });
}

exports.signin = function(req, res, next) {
    res.send(req.user);
}