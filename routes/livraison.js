const express = require('express');
const router = express.Router();
const myControl = require('../controllers/livraison');

router.post('/',  myControl.ajoutLivraison);
router.put('/:id',   myControl.updateLivraison);
router.get('/:id', myControl.voirUnLivraison);
router.get('/',   myControl.voirLivraison);
router.delete('/delete/:id',   myControl.deleteLivraison);

module.exports = router;