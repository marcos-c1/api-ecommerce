import { IPaymentDAO } from "../views/iPaymentDAO"
let PaymentModel = require('../models/Payment')

export class PaymentController implements IPaymentDAO {

    getPayments = async (req: any, res: any, next): Promise<void> => {
        try {
            let payments = await PaymentModel.find({})
            res.json(payments)
        } catch (error) {
            res.status(500).json({ error: `Erro na requisição GET dos payments: ${error}` })
        }
    }

    getPaymentByBarCode = async (req: any, res: any, next): Promise<void> => {
        try {
            let payment = await PaymentModel.find({ barCode: req.params.id })
            res.json(payment)
            res.status(200)
        } catch (error) {
            res.status(500).json({ error: `Erro na requisição GET do payment: ${error}` })
        }
    }

    createPayment = async (req: any, res: any, next): Promise<void> => {
        try {
            let payment = new PaymentModel({
                barCode: req.body.barCode,
                paymentDate: req.body.paymentDate,
                products: req.body.products,
                userID: req.body.userID,
                totalPayment: req.body.totalPayment,
                isShipping: req.body.isShipping
            })
            await payment.save()
            res.json(`${payment} salvo com sucesso!`)
            res.status(200)

        } catch (error) {
            res.status(500).json({ error: `Erro na requisição POST do payment: ${error}` })
        }
    }

    updatePaymentByBarCode = async (req: any, res: any, next): Promise<void> => {
        try {
            let payload = new Object({
                barCode: req.body.barCode,
                paymentDate: req.body.paymentDate,
                products: req.body.products,
                userID: req.body.userID,
                totalPayment: req.body.totalPayment,
                isShipping: req.body.isShipping
            })

            let doc = await PaymentModel.findOneAndUpdate({ barCode: req.params.id }, payload)
            res.json(`Pagamento ${doc.barCode} alterado.`)
            res.status(200)
        } catch (error) {
            res.status(500).json({ error: `Erro na requisição PUT do payment: ${error}` })
        }
    }

    deletePaymentByBarCode = async (req: any, res: any, next): Promise<void> => {
        try {
            const query = await PaymentModel.findOneAndDelete({ barCode: req.params.id })
            if (!query) {
                res.json("Pagamento não existe")
            } else {
                res.json(`Pagamento deletado: ${query}`)
                res.status(200)

            }
        } catch (error) {
            res.status(500).json({ error: `Erro na requisição DELETE do payment: ${error}` })
        }
    }
}