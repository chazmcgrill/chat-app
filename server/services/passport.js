const passport = require('passport');
const localStrategy = require('passport-local');
const User = require('../models/user');

const localOptions = { usernameField: 'email' };
const localLogin = new localStrategy(localOptions, function(email, password, done) {
    User.findOne({email: email}, function(err, user) {
        if (err) return done(err);
        if (!user) return done(null, false);
        return done(null, user);
    });
})

passport.use(localLogin);