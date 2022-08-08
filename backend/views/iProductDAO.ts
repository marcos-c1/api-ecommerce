export interface IProductDAO {
    getAllProducts(req, res, next) : Promise<void>
    getProductById(req, res, next) : Promise<void>
    createProduct(req, res, next) : Promise<void>
    deleteProductById(req, res, next) : Promise<void>
    updateProduct(req, res, next) : Promise<void>
}