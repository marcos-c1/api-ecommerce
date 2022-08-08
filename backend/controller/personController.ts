import { IPersonDAO } from "../views/iPersonDAO";
let Person = require('../models/Person')

export class PersonController implements IPersonDAO {
    getPeople = async (req, res, next): Promise<void> => {
        try {
            let person = await Person.find({})
            res.json(person)
        } catch (error) {
            res.status(500).json({ error: `Erro na requisição GET do Person: ${error}` })
        }
    }
    getPersonById = async (req, res, next): Promise<void> => {
        try {
            let people = await Person.findById({ _id: req.params.id })
            res.json(people)
            res.status(200)
        } catch (error) {
            res.status(500).json({ error: `Erro na requisição GET do Person: ${error}` })
        }
    }

    createPerson = async (req, res, next): Promise<void> => {
        try {
            let person = new Person({
                name: req.body.name,
                birthDate: req.body.birthDate,
                cpf: req.body.cpf,
                address: req.body.address,
                login: req.body.login
            })
            await person.save()
            res.json(`${person.name} salva com sucesso`)
            res.status(200)
        } catch (error) {
            res.status(500).json({ error: `Erro na requisição POST do Person: ${error}` })
        }
    }
    updatePersonById = async (req, res, next): Promise<void> => {
        try {
            let people = new Person({
                name: req.body.name,
                birthDate: req.body.birthDate,
                cpf: req.body.cpf,
                address: req.body.address,
                login: req.body.login
            })

            let person = await Person.findById({ _id: req.params.id })

            if (!person) {
                res.status(500).json(`Esta pessoa não existe`)
            } else {
                person = person.update(people)
                res.json(`${person.name} alterada com sucesso`)
                res.status(200)

            }
        } catch (error) {
            res.status(500).json({ error: `Erro na requisição PUT do Person: ${error}` })
        }
    }
    deletePersonById = async (req, res, next): Promise<void> => {
        try {
            const query = await Person.findByIdAndRemove({ _id: req.params.id })
            if (!query) {
                res.json("Esta pessoa não existe")
            } else {
                res.json(`Pessoa deletada: ${query}`)
                res.status(200)

            }
        } catch (error) {
            res.status(500).json({ error: `Erro na requisição DELETE do Person: ${error}` })
        }
    }
}