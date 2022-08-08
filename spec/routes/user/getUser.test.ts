import { UserController } from '../../../backend/controller/userController'
let db = require('../../../backend/config/db')

import { Request, Response } from '../../../backend/models/DTO'

jest.setTimeout(10000)

test('Retorna um novo user no banco', async () => {
    db()
    const id = '62e7f9f57f6971ee2e5d1acb'
    const res = new Response()
    const req = new Request()
    req.params.id = id
    let pc = new UserController()
    await pc.getUserById(req, res)
    expect(res.getStatusCode()).toBe(200)
})