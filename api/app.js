const express = require('express')
const app = express()

/* Routers */
const routes = require("./routes")

const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', routes)

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;