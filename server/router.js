const Auth = require('./controllers/auth');
const passport = require('passport');
require('./services/passport');

const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {
    app.get('/', (req, res) => res.send('main route'));
    app.post('/signin', requireSignin, Auth.signin);
    app.post('/signup', Auth.signup);
}