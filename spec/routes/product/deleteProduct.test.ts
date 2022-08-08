import { ProductController } from '../../../backend/controller/productController'
let db = require('../../../backend/config/db')

import { Request, Response } from '../../../backend/models/DTO'

jest.setTimeout(10000)

test('Deleta um produto do banco', async () => {
    db()
    const id = '62f041d4aa60aecef359a50e'
    const res = new Response()
    const req = new Request()
    req.params.id = id
    let pc = new ProductController()
    await pc.deleteProductById(req, res)
    expect(res.getStatusCode()).toBe(200)
})