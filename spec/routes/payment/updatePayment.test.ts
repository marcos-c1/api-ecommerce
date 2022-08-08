import { PaymentController } from '../../../backend/controller/paymentController'
let db = require('../../../backend/config/db')

import { Request, Response } from '../../../backend/models/DTO'

jest.setTimeout(10000)

test('Atualiza um pagamento do banco', async () => {
    db()
    const barCode = '1'
    const paymentDate = new Date()
    const products = [
        {
            productID: "62e76810356b0c328eec501c",
            quantity: 1
            },
            {
            productID: "62e76810356b0c328eec501d",
            quantity: 1
            },
            {
            productID: "62e76810356b0c328eec5020",
            quantity: 1
            }
    ]
    const userID = "62e7f9f57f6971ee2e5d1acb"
    const totalPayment = 6262
    const isShipping = false  

    const res = new Response()
    const req = new Request({
        barCode: barCode,
        paymentDate: paymentDate,
        products: products,
        userID: userID,
        totalPayment: totalPayment,
        isShipping: isShipping
    })
    req.params.id = barCode
    const next = null
    let pc = new PaymentController()
    await pc.updatePaymentByBarCode(req, res, next)
    expect(res.getStatusCode()).toBe(200)
})