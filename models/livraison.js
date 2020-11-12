const mongoose = require("mongoose");

const livraison = mongoose.Schema({
    nom_service:{type : String, required : true},
    adresse: {type : String, required : true},
    telephone: {type : String, required : true},
    email: {type : String, required : true},
    zone_livraison :
     zone = { 
        pays :[{type : String, required : true}],
        departement : [{type : String, required : true}],
        commune : [{type : String, required : true}]
    },
    status : {type : Boolean, required : true}
});

module.exports = mongoose.model("livraison", livraison);


/**
 const mongoose = require("mongoose");

const livraison = mongoose.Schema({
    nom_service:{type : String, required : true},
    adresse: {type : String, required : true},
    telephone: {type : String, required : true},
    email: {type : String, required : true},
    zone_livraison :
     zone = { 
        pays :[{type : String, required : true}],
        departement : [{type : String, required : true}],
        commune : [{type : String, required : true}]
    },
    status : {type : Boolean, required : true}
});

module.exports = mongoose.model("livraison", livraison);
 */