const express = require('express');
const  controller = require('../controller/checkoutController');

const router = express.Router();

router.post("/create-checkout-session", controller.getSessionData);


module.exports = router      