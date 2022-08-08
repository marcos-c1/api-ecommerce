let database = require('mongoose')

const paymentSchema = new database.Schema({
    barCode: {
        type: String,
        required: true
    },
    paymentDate: {
        type: Date,
        required: true
    },
    products: {
        type: Array,
        required: true
    },
    userID: {
        type: String,
        required: true
    },
    totalPayment: {
        type: Number,
        required: true
    },
    isShipping: {
        type: Boolean,
        required: true
    }
})

const Payment = database.model('payment', paymentSchema)

module.exports = Payment