let ex = require('express')
const router = ex.Router()

import { ProductController } from '../controller/productController'

let productController = new ProductController()

//@desc     GET all products from db
//@route    GET /api/products
//@access   Public
router.get('/products', productController.getAllProducts)

//@desc     GET a product by id from db
//@route    GET /api/products/:id
//@access   Public
router.get('/products/:id', productController.getProductById)

//@desc     POST a new product 
//@route    POST /api/products
//@access   Public
router.post('/products/', productController.createProduct)

//@desc     PUT a product by id from db
//@route    PUT /api/products/:id
//@access   Public
router.put('/products/:id', productController.updateProduct)

//@desc     DELETE a product by id from db
//@route    DELETE /api/products/:id
//@access   Public
router.delete('/products/:id', productController.deleteProductById)

module.exports = router