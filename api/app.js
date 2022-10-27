import { connectToMongo } from "../api/database.js"

const dotenv = require('dotenv')
const cors = require('cors')
const express = require('express')

const app = express()

/* Routers */
const routes = require("./routes")

const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

connectToMongo("mongodb://localhost:27017")

app.use('/', routes)

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;