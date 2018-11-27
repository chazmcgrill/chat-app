const passport = require('passport');
const localStrategy = require('passport-local');
const User = require('../models/user');

// signin local passport strategy
const localOptions = { usernameField: 'email' };
const localLogin = new localStrategy(localOptions, (email, password, done) => {
    // verify email & password compare using bcrypt
    User.findOne({email: email}, (err, user) => {
        if (err) return done(err);
        if (!user) return done(null, false);
        user.comparePassword(password, (err, isMatch) => {
            if (err) return done(err);
            if (!isMatch) return done(null, false);
            return done(null, user);
        });
    });
})

// use the strategies
passport.use(localLogin);