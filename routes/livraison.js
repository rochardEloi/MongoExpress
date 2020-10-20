const express = require('express');
const router = express.Router();
const myControl = require('../controllers/livraison');

router.post('/',  myControl.ajoutLivraison);
router.put('/:id',   myControl.updateLivraison);
router.get('/:id', myControl.voirUnLivraison);
router.get('/',   myControl.voirLivraison);

module.exports = router;