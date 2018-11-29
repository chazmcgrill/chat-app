const User = require('../models/user');
const jwt = require('jwt-simple');

function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.encode({ sub: user.id, iat: timestamp }, process.env.SECRET);
}

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
            res.json({ token: tokenForUser(user) });
        })
    });
}

exports.signin = function(req, res) {
    res.json({ token: tokenForUser(req.user) });
}