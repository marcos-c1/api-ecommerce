var database = require('mongoose');
var paymentSchema = new database.Schema({
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
});
var Payment = database.model('payment', paymentSchema);
module.exports = Payment;
