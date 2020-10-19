const Thing = require("../models/products");
exports.createThing = (req, res, next) => {
    const thing = new Thing({
        ...req.body
    });
    thing.save()
        .then(() => res.status('201').json({ message: 'Enregistrement effectuer' }))
        .catch(error => res.status('400').json({ error }))
};

exports.getOneThing = (req, res, next) => {
    Thing.findOne({ _id: req.params.id })
        .then(thing => res.status('200').json(thing))
        .catch(error => res.status('400').json(error))
};


exports.updateThing = (req, res, next) => {
    Thing.updateOne({ _id: req.params.id }, {...req.body, _id: req.params.id })
        .then(() => res.status('200').json({ message: "OK" }))
        .catch(error => res.status('400').json(error))


};


exports.deleteThing = (req, res, next) => {
    Thing.deleteOne({ _id: req.params.id })
        .then(() => res.status('200').json({ message: "OK" }))
        .catch(error => res.status('400').json(error))

}

exports.getAllThing = (req, res, next) => {

    Thing.find()
        .then(things => res.status('200').json(things))
        .catch(error => res.status('400').json(error))
}