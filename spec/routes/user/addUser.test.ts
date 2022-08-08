import { UserController } from '../../../backend/controller/userController'
let db = require('../../../backend/config/db')

import { Request, Response } from '../../../backend/models/DTO'

jest.setTimeout(10000)

test('Adiciona um novo user no banco', async () => {
    db()
    const login = "usuario_novo"
    const password = "nova_password"
    const res = new Response()
    const req = new Request({
        login: login,
        password: password
    })
    let pc = new UserController()
    await pc.createUser(req, res)
    expect(res.getStatusCode()).toBe(200)
})