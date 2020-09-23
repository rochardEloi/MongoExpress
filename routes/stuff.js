const express = require('express');
const router = express.Router();
const Thing = require("../models/thing");
const myControl = require('../controllers/stuff');
const verify = require('../middleware/auth');

router.post('/', verify, myControl.createThing);
router.get('/:id', myControl.getOneThing);
router.put('/:id', verify, myControl.updateThing);
router.delete('/:id', verify, myControl.deleteThing);
router.get('/', myControl.getAllThing);
module.exports = router;