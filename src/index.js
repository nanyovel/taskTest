import app from './app.js'
import conectarDB from './db.js'
conectarDB()
app.listen(3000)

console.log('server on port 3000...')