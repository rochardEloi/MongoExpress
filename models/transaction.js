const mongoose = require("mongoose");

const transaction = mongoose.Schema({
    id_commande: {type : String, required : true},
    montant: {type : Number, required : true},
    id_methode: {type : String, required : true},
    status : {type : Boolean, required : true}
});

module.exports = mongoose.model("transaction", transaction);