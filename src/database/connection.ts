import { Pool } from 'pg'

const createConnection = async() => {
  const client = new Pool({
    host: "localhost",
    user: "postgres",
    password: "123456",
    database: "code"
  })
  await client.connect()
  return client
}

export default createConnection

