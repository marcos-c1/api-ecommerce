import { UserController } from '../../../backend/controller/userController'
let db = require('../../../backend/config/db')

import { Request, Response } from '../../../backend/models/DTO'

jest.setTimeout(10000)

test('Deleta um user do banco', async () => {
    db()
    const id = '62e82c7d3640f227ddfde20a'
    const res = new Response()
    const req = new Request()
    req.params.id = id
    let pc = new UserController()
    await pc.getUserById(req, res)
    expect(res.getStatusCode()).toBe(200)
})