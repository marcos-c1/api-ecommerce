require('dotenv').config()
let m = require('mongoose')
const Crypt = require('cryptr')
const cryptr = new Crypt(process.env.SECRET)

const userSchema = new m.Schema({
    login: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.pre("save", function (next: Function) {
    if (this.isModified("password" || this.isNew)) {
        this.password = cryptr.encrypt(this.password)
        next()
    }
})

userSchema.pre("update", function(next: Function) {
    if (this.isModified("password" || this.isNew)) {
        this.password = cryptr.encrypt(this.password)
        next()
    }
})

const User = m.model('user', userSchema)

module.exports = User