require('dotenv').config()

const mongoose = require('mongoose')

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Conexão com o MongoDB foi um sucesso!")
    } catch (error) {
        console.error("Conexão com o MongoDB deu falha.")
    }
}

module.exports = connectDB