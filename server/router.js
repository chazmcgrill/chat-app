module.exports = function(app) {
    app.get('/', (req, res) => res.send('main route'));
}