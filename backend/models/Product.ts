let mongo = require('mongoose')
const productSchema = new mongo.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    countInStock: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    category: {
        type: String, 
        required: true
    }
})

const Product = mongo.model('product', productSchema)

module.exports = Product