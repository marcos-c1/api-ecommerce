require('dotenv').config()

let productsData = require('./data/product')
let usersData = require('./data/users')
let personData = require('./data/person')
let paymentData = require('./data/payment')

let dbConnection = require('./config/db')

let Produtinho = require('./models/Product')
let Users = require('./models/User')
let Persons = require('./models/Person')
let Payments = require('./models/Payment')

dbConnection()

const importProductData = async () => {
    try {
        await Produtinho.deleteMany({})
        await Produtinho.insertMany(productsData)
        console.log("Data import success")

        process.exit()
    } catch (error) {
        console.log("Data import failure")
        process.exit(1)
    }
} 

const importUserData = async() => {
    try {
        await Users.deleteMany({})
        await Users.insertMany(usersData)
        console.log("Users inserido com sucesso.")
        process.exit()
    } catch (error) {
        console.log(`Users importData deu falha: ${error}`)
        process.exit(1)
    }
}

const importPersonData = async() => {
    try {
        await Persons.deleteMany({})
        await Persons.insertMany(personData)
        console.log("Person inserido com sucesso.")
        process.exit()
    } catch (error) {
        console.log(`Person importData deu falha: ${error}`)
        process.exit(1)
    }
}

const importPaymentData = async() => {
    try {
        await Payments.deleteMany({})
        await Payments.insertMany(paymentData)
        console.log("Payments inserido com sucesso.")
        process.exit()
    } catch (error) {
        console.log(`Payments importData deu falha: ${error}`)
        process.exit(1)
    }
}

importPaymentData()