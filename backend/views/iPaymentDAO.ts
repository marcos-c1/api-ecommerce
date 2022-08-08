export interface IPaymentDAO {
    getPayments(req, res, next) : Promise<void>
    getPaymentByBarCode(req, res, next) : Promise<void>
    createPayment(req, res, next) : Promise<void>
    updatePaymentByBarCode(req, res, next) : Promise<void>
    deletePaymentByBarCode(req, res, next) : Promise<void>
}