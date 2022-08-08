import { ProductController } from '../../../backend/controller/productController'
let db = require('../../../backend/config/db')

import { Request, Response } from '../../../backend/models/DTO'

jest.setTimeout(10000)

test('Armazena um produto no banco', async () => {
    db()
    const name = 'Um item qualquer'
    const description = 'Descricao'
    const price = 299.90
    const countInStock = 5
    const imageUrl = 'https://qualquerImagem.com/'
    const category = 'Electronic'
    const req = new Request({
        name: name,
        description: description,
        price: price,
        countInStock: countInStock,
        imageUrl: imageUrl,
        category: category
    })
    const res = new Response()
    const next = null
    let pc = new ProductController()
    await pc.createProduct(req, res, next)
    expect(res.getStatusCode()).toBe(200)

})