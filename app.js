const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const stuffRoutes = require("./routes/stuff");
const userRoutes = require("./routes/user");
const userProducts = require("./routes/products");
const faireUnCommande = require("./routes/achat");
const app = express();
/* mongoose.connect('mongodb+srv://rochard_database:127.0.0.1:27017/?gssapiServiceName=mongodb', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !')); */
mongoose.connect('mongodb://127.0.0.1:27017/rochard_database', {
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
app.use("/api/stuff", stuffRoutes);
app.use("/api/auth", userRoutes);
app.use("/products", userProducts);
app.use("/commande", faireUnCommande);
module.exports = app;