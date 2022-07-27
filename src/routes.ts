import { Router } from 'express'
import createUserController from './useCases/createUser'
import findUserByIdController from './useCases/findUserById'

const router = Router()

router.get("/users/:id", (request, response) => {
  return findUserByIdController.handle(request, response)
})

router.post("/users", (request, response) => {
  return createUserController.handle(request, response)
})

export default router