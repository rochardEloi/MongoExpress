const express = require('express');
const router = express.Router();
const myControl = require('../controllers/achat');
const verify = require('../middleware/auth');

router.post('/',  myControl.faireUnCommande);
router.get('/:id', myControl.voirUnCommande);
router.put('/:id',   myControl.updateCommande);
router.delete('/delete/:id', verify, myControl.deleteCommande);
router.get('/', myControl.voirTousCommande);
router.get('/tree/:id', myControl.voirCertainCommande);
module.exports = router;