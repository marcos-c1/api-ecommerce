import { PaymentController } from '../../../backend/controller/paymentController'
let db = require('../../../backend/config/db')

import { Request, Response } from '../../../backend/models/DTO'

jest.setTimeout(10000)

test('Deleta um pagamento no banco', async () => {
    db()
    const barCode = '300'
    const next = null
    const req = new Request()
    const res = new Response()
    req.params.id = barCode
    let pc = new PaymentController()
    await pc.deletePaymentByBarCode(req, res, next)
    expect(res.getStatusCode()).toBe(200)
})