const express = require('express');
const router = express.Router();
const Thing = require("../models/products");
const myControl = require('../controllers/products');
const verify = require('../middleware/auth');

router.post('/',  myControl.createThing);
router.get('/:id', myControl.getOneThing);
router.put('/:id',   myControl.updateThing);
router.delete('/delete/:id', verify, myControl.deleteThing);
router.get('/', myControl.getAllThing);
module.exports = router;