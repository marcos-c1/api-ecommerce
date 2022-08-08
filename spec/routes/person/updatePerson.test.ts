import { PersonController } from '../../../backend/controller/personController'
let db = require('../../../backend/config/db')

import { Request, Response } from '../../../backend/models/DTO'

jest.setTimeout(10000)

test('Atualiza uma pessoa do banco', async () => {
    db()
    const id = '62f055466f3d688a2db02739'
    const name = "Nathalia"
    const birthDate = new Date()
    const cpf = "xxx.xxx.xxx-xx"
    const address = [
        {
            city: "Asa Sul",
            pinCode: "xx.xxx-xxx",
            district: "Plano Piloto",
        }
    ]
    const login = "xxxxxxx"

    const res = new Response()
    const req = new Request({
        name: name,
        birthDate: birthDate,
        cpf: cpf,
        address: address,
        login: login
    })
    req.params.id = id
    const next = null
    let pc = new PersonController()
    await pc.deletePersonById(req, res, next)
    expect(res.getStatusCode()).toBe(200)
})