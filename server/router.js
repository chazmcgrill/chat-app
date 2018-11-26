const Auth = require('./controllers/auth');

module.exports = function(app) {
    app.get('/', (req, res) => res.send('main route'));
    app.post('/signup', Auth.signup);
}