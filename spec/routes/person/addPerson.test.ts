import { PersonController } from '../../../backend/controller/personController'
let db = require('../../../backend/config/db')

import { Request, Response } from '../../../backend/models/DTO'

jest.setTimeout(10000)

test('Cria uma pessoa no banco', async () => {
    db()
    const name = 'PessoaTESTE'
    const birthDate = new Date()
    const cpf = 'xxx.xxx.xxx-xx'
    const address = [
        {
            city: "Asa Sul",
            pinCode: "xx.xxx-xxx",
            district: "Plano Piloto",
        }     
    ]
    const login = 'xxxxxx'
    const res = new Response()
    const req = new Request({
        name: name,
        birthDate: birthDate,
        cpf: cpf,
        address: address,
        login: login
    })
    const next = null
    let pc = new PersonController()
    await pc.createPerson(req, res, next)
    expect(res.getStatusCode()).toBe(200)
})