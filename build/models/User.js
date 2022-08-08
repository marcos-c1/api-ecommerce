require('dotenv').config();
var m = require('mongoose');
var Crypt = require('cryptr');
var cryptr = new Crypt(process.env.SECRET);
var userSchema = new m.Schema({
    login: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
userSchema.pre("save", function (next) {
    if (this.isModified("password" || this.isNew)) {
        this.password = cryptr.encrypt(this.password);
        next();
    }
});
var User = m.model('user', userSchema);
module.exports = User;
