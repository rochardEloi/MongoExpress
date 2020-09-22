const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Thing = require("./models/thing");
const app = express();
mongoose.connect('mongodb+srv://rochard_database:g9u2C3kz0zltVDTd@cluster0-ravbf.azure.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.use(bodyParser.json());

app.post('/api/stuff', (req, res, next) => {
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
})

app.get('/api/stuff/:id', (req, res, next) => {
    Thing.findOne({ _id: req.params.id })
        .then(thing => res.status('200').json(thing))
        .catch(error => res.status('400').json(error))
})
app.put('/api/stuff/:id', (req, res, next) => {
    Thing.updateOne({ _id: req.params.id }, {...req.body, _id: req.params.id })
        .then(() => res.status('200').json({ message: "OK" }))
        .catch(error => res.status('400').json(error))


})

app.delete('/api/stuff/:id', (req, res, next) => {
    Thing.deleteOne({ _id: req.params.id })
        .then(() => res.status('200').json({ message: "OK" }))
        .catch(error => res.status('400').json(error))

});
app.get('/api/stuff', (req, res, next) => {

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
});
module.exports = app;