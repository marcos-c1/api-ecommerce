let frameworkBACKEND = require('express')
let paymentRouter = frameworkBACKEND.Router()

import { PaymentController } from '../controller/paymentController'

let paymentController = new PaymentController()

// @desc    GET all payments from /api/payment
// @route   GET /api/payment
// security PUBLIC
paymentRouter.get('/payment', paymentController.getPayments)

// @desc    GET a payment by barCode or ID from /api/payment/:id
// @route   GET /api/payment/:id
// @access  PUBLIC
paymentRouter.get('/payment/:id', paymentController.getPaymentByBarCode)

// @desc    POST a new payment in /api/payment/
// @route   POST /api/payment
// @access  PUBLIC
paymentRouter.post('/payment', paymentController.createPayment)

// @desc    PUT a payment in /api/payment/:id
// @route   PUT /api/payment/:id
// @access  PUBLIC
paymentRouter.put('/payment/:id', paymentController.updatePaymentByBarCode)

// @desc    DELETE a payment in /api/payment/:id
// @route   DELETE /api/person/:id
// @access  PUBLIC
paymentRouter.delete('/payment/:id', paymentController.deletePaymentByBarCode)

module.exports = paymentRouter