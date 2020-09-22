const express = require('express');
const router = express.Router();
const userControl = require('../controllers/user');

router.post('/', userControl.login);
router.post('/', userControl.signup);


module.exports = router;