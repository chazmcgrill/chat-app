const Auth = require('./controllers/auth');
const passport = require('passport');
require('./services/passport');

const requireSignin = passport.authenticate('local', { session: false });
const requireAuth = passport.authenticate('jwt', { session: false });

module.exports = function(app) {
    app.get('/', requireAuth, (req, res) => res.send('main route'));
    app.post('/signin', requireSignin, Auth.signin);
    app.post('/signup', Auth.signup);
}