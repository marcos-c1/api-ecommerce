import { IProductDAO } from "../views/iProductDAO"

let Produto = require('../models/Product')

export class ProductController implements IProductDAO {
    
    getAllProducts = async (req: any, res: any) : Promise<void> => {
        try {
            const products = await Produto.find({})
    
            res.json(products)
        } catch (error) {
            console.log(error)
            res.status(500).json({message: "Erro no servidor"})
        }
    }
    
    createProduct = async (req: any, res: any, next) : Promise<void> => {
        try {
            let product = new Produto({
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                countInStock: req.body.countInStock,
                imageUrl: req.body.imageUrl,
                category: req.body.category
            })  

            await product.save()
            res.json(`Produto ${product.name} criado.`)
            res.status(200)
        } catch (error) {
            res.status(500).json({message: `Erro na requisição POST do Product: ${error}`})
        }
    }

    updateProduct = async(req, res, next) : Promise<void> => {
        try {
            let productBody = new Produto({
                name: req.body.name,
                description: req.body.description,
                imageUrl: req.body.imageUrl,
                price: req.body.price,
                quantity: req.body.quantity
            })
            
            let product = await Produto.findById({_id: req.params.id})

            if (!product) {
                res.status(500).json(`Produto não existe.`)
            } else {
                product = product.updateOne(productBody)
                res.json({message: `Produto alterado.`})
                res.status(200)
            }
        } catch(error) {
            res.status(500).json({message: `Erro no PUT do produto: ${error}`})
        }
    }

    deleteProductById = async(req: any, res: any) : Promise<void> => {
        try {
            const query = await Produto.findByIdAndRemove({_id: req.params.id})
            if(!query){
                res.json("Usuário não existe")
            } else {
                res.json(`Usuário deletado: ${query}`)
                res.status(200)
            }
        } catch (error) {
            res.status(500).json({message: `${error}`})
        }
    }
    
    getProductById = async (req: any, res: any) : Promise<void> => {
        try {
            const product = await Produto.findById(req.params.id)
    
            res.json(product)
            res.status(200)
        } catch (error) {
            console.log(error)
            res.status(500).json({message: "Erro no servidor"})
        }
    }
}