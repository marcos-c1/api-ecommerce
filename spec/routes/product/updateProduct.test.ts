import { ProductController } from '../../../backend/controller/productController'
let db = require('../../../backend/config/db')

import { Request, Response } from '../../../backend/models/DTO'

jest.setTimeout(10000)

test('Atualiza um produto do banco', async () => {
    db()
    const id = '62f041d907898d75bc2b1586'
    const name = 'Um item qualquer'
    const description = 'Descricao'
    const price = 999.99
    const countInStock = 15
    const imageUrl = 'https://qualquerImagem.com/'
    const category = 'Electronic'
    const res = new Response()
    const req = new Request({
        name: name,
        description: description,
        price: price,
        countInStock: countInStock,
        imageUrl: imageUrl,
        category: category
    })
    const next = null
    req.params.id = id
    let pc = new ProductController()
    await pc.updateProduct(req, res, next)
    expect(res.getStatusCode()).toBe(200)
})