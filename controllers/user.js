const User = require('../models/user');
const bcrypt = require('bcrypt');
exports.signup = (req, res, next) => {
    const userInfo = req.body;
    bcrypt.hash(userInfo.password, 10)
        .then(
            hash => {
                const user = new User({
                    email: userInfo.email,
                    password: hash
                });
                user.save()
                    .then(() => res.status('201').json({ message: 'Ajout Utilisateur Effectuer' }))
                    .catch(error => res.status('400').json(error))
            }
        )
        .catch(error => res.status('500').json(error))
};

exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
        .then(
            user => {
                if (!user) {
                    return res.status('400').json({ 'message': 'utilisateur non trouve' });
                }
                bcrypt.compare(req.body.email, user.email)
                    .then(valid => {
                        if (!valid) {
                            return res.status('400').json({ 'message': 'Mot de passe Incorrect' });
                        }
                        res.status(200).json({
                            userId: user._id,
                            token: "TOKEN"
                        })
                    })
                    .catch(error => res.status('500').json(error));
            }
        )
        .catch(error => res.status('500').json(error));
};