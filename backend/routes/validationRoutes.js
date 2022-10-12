//a simple route to post data.
const express = require('express');
const router = express.Router();
const {isValid} = require('../controllers/validationController');


router.route('/').post(isValid);

module.exports = router;
