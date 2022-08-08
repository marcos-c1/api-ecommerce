var mongoDB = require('mongoose');
var personSchema = new mongoDB.Schema({
    name: {
        type: String,
        required: true
    },
    birthDate: {
        type: Date,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    address: {
        type: Array,
        required: true
    },
    login: {
        type: String,
        required: true
    }
});
var Person = mongoDB.model('person', personSchema);
module.exports = Person;
