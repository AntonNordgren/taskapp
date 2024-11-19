require('dotenv').config()

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const app = express()
const PORT = process.env.PORT || 5000

const authRouter = require('./routes/authRoutes')

app.use(cors())
app.use(cookieParser())
app.use(express.json())

app.use("/api/auth", authRouter)

mongoose.connect(process.env.DB_CONNECTION_STRING).then(res => {
  console.log('DB CONNECTED')
  app.listen(PORT, () => console.log(`Server at PORT: ${PORT}`))
}).catch(err => console.log(err))
