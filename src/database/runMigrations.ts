import path from 'path'
import fs from 'fs'
import createConnection from './connection'

(async () => {
  const client = await createConnection()
  const fileDatabaseDir = path.join(__dirname, "migrations")

  console.log('Start migrations ', new Date())

  fs.readdir(fileDatabaseDir, (err, files) => {
    if(err) {
      console.error(err);
    }

    files.forEach((file) => {
      fs.readFile(path.join(fileDatabaseDir, file), async(err, content) => {
        if(err) {
          console.error(err)
        }

        const runMigrationQuery = content.toString()
        await client.query(runMigrationQuery)

      })
    })
    console.log('Finish migrations ', new Date())
  })
})()