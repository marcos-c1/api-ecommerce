import { PersonController } from '../../../backend/controller/personController'
let db = require('../../../backend/config/db')

import { Request, Response } from '../../../backend/models/DTO'

jest.setTimeout(10000)

test('Deleta uma pessoa no banco', async () => {
    db()
    const id = '62f0571e5085bce6d3ea06f5'
    const res = new Response()
    const req = new Request()
    req.params.id = id
    const next = null
    let pc = new PersonController()
    await pc.deletePersonById(req, res, next)
    expect(res.getStatusCode()).toBe(200)
})