const express = require('express')
const router = express.Router()
const {createPayment} = require('../controllers/paymentController.js')

router.post("/create", createPayment);

module.exports = router;