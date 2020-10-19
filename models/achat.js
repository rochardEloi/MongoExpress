const mongoose = require("mongoose");

const achat = mongoose.Schema({
      email: {type : String, required : true},
      nom: {type : String, required : true},
      prenom: {type : String, required : true},
      telephone: {type : String, required : true},
      produit : {type : String, required : true},
      quantite: {type : Number, required : true},
      date : {type: String, required : true},
      montant : {type : Number, required : true},
      service_livraison : {type : String, required : true},
      delai : {type : String, required : true},
      validite : {type : Boolean, required : true}
});
module.exports = mongoose.model('achat', achat);