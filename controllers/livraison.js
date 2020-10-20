const Livraison = require("../models/livraison");


exports.ajoutLivraison = (req, res, next) =>{
      const livraison = new Livraison({
          ...req.body
      });
      livraison.save()
      .then(() => res.status("200").json(livraison))
      .catch(error => res.status("400").json(error));

}

exports.voirLivraison = (req,res,next) => {
    Livraison.find()
    .then(livraison => res.status("200").json(livraison))
      .catch(error => res.status("400").json(error));
}

exports.voirUnLivraison = (req,res,next) => {
    Livraison.findOne({_id : req.params.id})
    .then(livraison => res.status("200").json(livraison))
      .catch(error => res.status("400").json(error));
}

exports.updateLivraison = (req,res,next) =>{
   Livraison.updateOne({_id : req.params.id}, {...req.body, _id : req.params.id})
    .then(livraison => res.status("200").json(livraison))
    .catch(error => res.status("400").json(error));
}