const passport = require('passport');
const localStrategy = require('passport-local');
const User = require('../models/user');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
require('dotenv').config();

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

// auth route jwt strategy
const jwtLogin = new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: process.env.SECRET
}, (payload, done) => {
    User.findById(payload.sub, (err, user) => {
        if (err) return done(err, false);
        if (user) {
            done(null, user);
        } else {
            done(null, false);
        }
    })
})

// use the strategies
passport.use(localLogin);
passport.use(jwtLogin);