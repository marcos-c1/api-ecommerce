export interface IUserDAO {
    getAllUsers(req, res, next) : Promise<void>
    createUser(req, res, next) : Promise<void>
    deleteUser(req, res, next) : Promise<void>
    getUserById(req, res, next) : Promise<void>
    updateUser(req, res, next) : Promise<void>
}