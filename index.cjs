const port = 3000
const cors = require('cors')
const express = require('express')
const router = require('./src/routes/router.cjs')
require('dotenv').config()
const app = express()
const connectToDatabase = require('./src/db/connect.cjs')

// middleware
app.use(cors())
app.use(express.json())
app.use(router)

// connect with database
connectToDatabase()

// starting server 
app.listen(port, () => {
  console.log('Server activated')
})