exports.signup = function(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    // check db for email
    // check for duplicate email
    // if email unique create user save record
    // confirm creation

    res.send({ email, password })
}