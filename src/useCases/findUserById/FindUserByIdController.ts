import { Request, Response } from "express"
import FindUserByIdUseCase from "./FindUserByIdUseCase"

class FindUserByIdController {
  constructor(private findUserByIdUseCase: FindUserByIdUseCase){}

  async handle(request: Request, response: Response) {
    const { id } = request.params

    const user = await this.findUserByIdUseCase.execute(id)

    return response.json(user)
  }
}

export default FindUserByIdController