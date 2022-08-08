import { PaymentController } from '../../../backend/controller/paymentController'
let db = require('../../../backend/config/db')

import { Request, Response } from '../../../backend/models/DTO'

jest.setTimeout(10000)

test('Retorna um pagamento do banco', async () => {
    db()
    const barCode = '3'
    const res = new Response()
    const req = new Request()
    req.params.id = barCode
    const next = null
    let pc = new PaymentController()
    await pc.getPaymentByBarCode(req, res, next)
    expect(res.getStatusCode()).toBe(200)
})