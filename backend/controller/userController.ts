import { IUserDAO } from "../views/iUserDAO"

let UserModel = require('../models/User')

export class UserController implements IUserDAO {
    getAllUsers = async (req: any, res: any) => {
        try {
            let users = await UserModel.find({})
            res.json(users)
        } catch (error) {
            res.status(500).json({ message: `Erro na requisição GET de usuários: ${error}` })
        }
    }

    createUser = async (req: any, res: any) => {
        try {
            let user = new UserModel({ login: req.body.login, password: req.body.password })
            await user.save()
            res.json(`Usuário ${user.login} criado!`)
            res.status(200)
        } catch (error) {
            res.status(500).json({ message: `Não foi possível criar o usuário: ${error}` })
        }
    }

    updateUser = async (req: any, res: any) => {
        try {
            let user = new User({
                login: req.body.login,
                password: req.body.password
            })

            let users = await User.findById({ _id: req.params.id })

            if (!users) {
                res.status(500).json(`Este user não existe`)
            } else {
                users = users.update(user)
                res.json(`${user.login} alterado com sucesso`)
                res.status(200)
            }
        } catch (error) {
            res.status(500).json({ error: `Erro na requisição PUT do User: ${error}` })
        }
    }

    deleteUser = async (req: any, res: any) => {
        try {
            let query = await UserModel.findByIdAndRemove({ _id: req.params.id })
            res.json("query: " + query)
            res.status(200)
        } catch (error) {
            res.status(500).json({ message: `Não foi possível deletar o usuário: ${error}` })
        }
    }

    getUserById = async (req: any, res: any) => {
        try {
            let user = await UserModel.findById(req.params.id)
            res.json(user)
            res.status(200)
        } catch (error) {
            res.status(500).json({ message: `Erro na requisição GET do usuário: ${error}` })
        }
    }
}