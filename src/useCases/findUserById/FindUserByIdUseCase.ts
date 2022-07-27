import IUserRepositories from "../../repositories/IUserRepositories"

class FindUserByIdUseCase {
  constructor(private usersRepository: IUserRepositories) {}

  async execute(id: string) {
    const user = await this.usersRepository.findById(id)
    return user
  }
}

export default FindUserByIdUseCase