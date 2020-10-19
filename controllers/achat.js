const Thing = require("../models/achat");
exports.faireUnCommande = (req, res, next) => {
    const thing = new Thing({
        ...req.body
    });
    thing.save()
        .then(() => res.status('201').json(thing))
        .catch(error => res.status('400').json({ error }))
};

exports.voirUnCommande = (req, res, next) => {
    Thing.findOne({ _id: req.params.id })
        .then(thing => res.status('200').json(thing))
        .catch(error => res.status('400').json(error))
};


exports.updateCommande = (req, res, next) => {
    Thing.updateOne({ _id: req.params.id }, {...req.body, _id: req.params.id })
        .then(() => res.status('200').json({ message: "OK" }))
        .catch(error => res.status('400').json(error))

};


exports.deleteCommande = (req, res, next) => {
    Thing.deleteOne({ _id: req.params.id })
        .then(() => res.status('200').json({ message: "OK" }))
        .catch(error => res.status('400').json(error))

}

exports.voirTousCommande = (req, res, next) => {
    Thing.find() 
        .then(things => res.status('200').json(things))
        .catch(error => res.status('400').json(error))
}
exports.voirCertainCommande = (req, res, next) => {
    Thing.find({ produit: req.params.id }) 
        .then(things => res.status('200').json(things))
        .catch(error => res.status('400').json(error))
}