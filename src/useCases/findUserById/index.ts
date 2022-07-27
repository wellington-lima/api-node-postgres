import UserPostgresRepository from "../../repositories/implementations/UserPostgresRepositories"
import FindUserByIdController from "./FindUserByIdController"
import FindUserByIdUseCase from "./FindUserByIdUseCase"

const usersRepository = new UserPostgresRepository()
const findUserByIdUseCase = new FindUserByIdUseCase(usersRepository)
const findUserByIdController = new FindUserByIdController(findUserByIdUseCase)

export default findUserByIdController