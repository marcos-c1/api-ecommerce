import { PaymentController } from '../../../backend/controller/paymentController'
let db = require('../../../backend/config/db')

import { Request, Response } from '../../../backend/models/DTO'

jest.setTimeout(10000)

test('Adiciona um novo pagamento no banco', async () => {
    db()
    const barCode = '4'
    const paymentDate = new Date()
    const products = [
        {
            productId: "62e76810356b0c328eec5020",
            quantity: 5
        }
    ]
    const userID = "62e7f9f57f6971ee2e5d1acb"
    const totalPayment = 1000
    const isShipping = true    
    const res = new Response()
    const req = new Request({
        barCode: barCode,
        paymentDate: paymentDate,
        products: products,
        userID: userID,
        totalPayment: totalPayment,
        isShipping: isShipping
    })
    const next = null
    let pc = new PaymentController()
    await pc.createPayment(req, res, next)
    expect(res.getStatusCode()).toBe(200)
})