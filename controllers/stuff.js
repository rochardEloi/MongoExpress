const Thing = require("../models/thing");
exports.createThing = (req, res, next) => {
    let name = req.body;
    console.log(name.title);
    console.log(req.body);
    delete req.body._id;
    const thing = new Thing({
        //title : name.title;
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
        /* const stuff = [{
                _id: 'oeihfzeoi',
                title: 'Mon premier objet',
                description: 'Les infos de mon premier objet',
                imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
                price: 4900,
                userId: 'qsomihvqios',
            },
            {
                _id: 'oeihfzeomoihi',
                title: 'Mon deuxième objet',
                description: 'Les infos de mon deuxième objet',
                imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
                price: 2900,
                userId: 'qsomihvqios',
            },
        ];
        res.status(200).json(stuff); */
}