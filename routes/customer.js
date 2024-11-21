
const express = require('express');
const router = express.Router();

const logout = require("../controllers/logout");
const customerController = require('../controllers/customerController');
/**
 *  Customer Routes
 */

//router.get('/dashboard', customerController.dashboard);

//router.get('/customer/addCustomer', customerController.addCustomer);



router.get("/logout", logout)

module.exports = router;

