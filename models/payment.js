const mongoose = require("mongoose");

const payment = mongoose.Schema({
    nom: {type : String, required : true},
    cle: {type : Number, required : true},
});

module.exports = mongoose.model("payment", payment);