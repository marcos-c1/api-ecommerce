let exp = require('express')
let userRouter = exp.Router()

import { UserController } from '../controller/userController'

let userController = new UserController()

// @desc    GET all users from /api/users
// @route   GET /api/users
// security PUBLIC
userRouter.get('/users', userController.getAllUsers)

// @desc    GET a user by id from /api/users/:id
// @route   GET /api/users/:id
// @access  PUBLIC
userRouter.get('/users/:id', userController.getUserById)

// @desc    POST a new user in /api/users/
// @route   POST /api/users
// @access  PUBLIC
userRouter.post('/users', userController.createUser)

// @desc    DELETE a user in /api/users/:id
// @route   DELETE /api/users/:id
// @access  PUBLIC
userRouter.delete('/users/:id', userController.deleteUser)

module.exports = userRouter