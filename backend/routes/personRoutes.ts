let exp = require('express')
let personRouter = exp.Router()

import { PersonController } from '../controller/personController'

let personController = new PersonController()

// @desc    GET all people from /api/person
// @route   GET /api/person
// security PUBLIC
personRouter.get('/person', personController.getPeople)

// @desc    GET a person by id from /api/person/:id
// @route   GET /api/person/:id
// @access  PUBLIC
personRouter.get('/person/:id', personController.getPersonById)

// @desc    POST a new person in /api/person/
// @route   POST /api/person
// @access  PUBLIC
personRouter.post('/person', personController.createPerson)

// @desc    PUT a person in /api/person/:id
// @route   PUT /api/person/:id
// @access  PUBLIC
personRouter.put('/person/:id', personController.updatePersonById)

// @desc    DELETE a person in /api/person/:id
// @route   DELETE /api/person/:id
// @access  PUBLIC
personRouter.delete('/person/:id', personController.deletePersonById)

module.exports = personRouter