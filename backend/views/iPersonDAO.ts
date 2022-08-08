export interface IPersonDAO {
    getPeople(req, res, next) : Promise<void>
    getPersonById(req, res, next) : Promise<void>
    createPerson(req, res, next) : Promise<void>
    updatePersonById(req, res, next) : Promise<void>
    deletePersonById(req, res, next) : Promise<void>
}