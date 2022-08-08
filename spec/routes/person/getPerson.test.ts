import { PersonController } from '../../../backend/controller/personController'
let db = require('../../../backend/config/db')

import { Request, Response } from '../../../backend/models/DTO'

jest.setTimeout(10000)

test('Retorna uma pessoa do banco', async () => {
    db()
    const id = '62f055466f3d688a2db02739'
    const res = new Response()
    const req = new Request()
    req.params.id = id
    const next = null
    let pc = new PersonController()
    await pc.getPersonById(req, res, next)
    expect(res.getStatusCode()).toBe(200)
})