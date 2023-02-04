const db = require("../models");
const User = db.users;

exports.getWelcome = (req, res) => {
    res.status(200).json({message: 'welcome on board, M. White'});
}

exports.postUser = (req, res) => {
    if(!req.body.pseudo || !req.body.firstName || !req.body.lastName) {
        res.status(401).json({message: 'Formulaire invalide'});
    }
    const user = new User({
        pseudo: req.body.pseudo,
        firstName: req.body.firstname,
        lastName: req.body.lastName
    });
    user.save(user)
        .then(data => {
            res.status(201).json({message: `Bienvenue, ${data.pseudo}`});
        })
        .catch(error => {
            res.status(500).json({message: error.message});
        });
};

exports.getList = (req, res) => {
    User.find()
    .then(data => {
        res.status(200).json(data);
    })
    .catch(error => {
        res.status(500).json({message: error.message});
    })
}