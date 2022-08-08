import { ProductController } from '../../../backend/controller/productController'
let db = require('../../../backend/config/db')

import { Request, Response } from '../../../backend/models/DTO'

jest.setTimeout(10000)

test('Retorna um produto do banco', async () => {
    db()
    const id = '62f041d0db4d4108025ddcef'
    const res = new Response()
    const req = new Request()
    const next = null
    req.params.id = id
    let pc = new ProductController()
    await pc.updateProduct(req, res, next)
    expect(res.getStatusCode()).toBe(200)
})