const express = require('express');
const router = express.Router();
const userControl = require('../controllers/user');

router.post('/login', userControl.login);
router.post('/signup', userControl.signup);


module.exports = router;