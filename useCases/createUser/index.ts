import UserPostgresRepository from "../../src/repositories/implementations/UserPostgresRepositories"
import CreateUserController from "./CreateUserController"
import CreateUserUseCase from "./CreateUserUseCase"

const usersRepository = new UserPostgresRepository()
const createUserUseCase = new CreateUserUseCase(usersRepository)
const createUserController = new CreateUserController(createUserUseCase)

export default createUserController