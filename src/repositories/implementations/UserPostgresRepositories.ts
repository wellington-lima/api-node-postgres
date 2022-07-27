import { Pool } from "pg"
import User from "../../entities/User"
import IUserRepositories from "../IUserRepositories"
import createConnection from "../../database/connection"

class UserPostgresRepository implements IUserRepositories {
  private client: Pool

  constructor() {
    createConnection().then((connection) => (this.client = connection))
  }

  async create({ id, name, email }: User): Promise<void> {
    await this.client.query("INSERT INTO users(id, name, email) VALUES ($1, $2, $3)", [id, name, email])
  }

  async findById(idUser: String): Promise<User | null> {
    const { rows } = await this.client.query("SELECT * FROM users WHERE id = $1 LIMIT 1", [idUser])

    if (rows.length > 0) {
      const { id, name, email } = rows[0]
      const user: User = {
        id,
        name,
        email
      }
  
      return user
    }

    return null

  }
}

export default UserPostgresRepository