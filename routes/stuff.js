const express = require('express');
const router = express.Router();
const Thing = require("../models/thing");
const myControl = require('../controllers/stuff');
router.post('/', myControl.createThing);

router.get('/:id', myControl.getOneThing);
router.put('/:id', myControl.updateThing);

router.delete('/:id', myControl.deleteThing);
router.get('/', myControl.getAllThing);
module.exports = router;