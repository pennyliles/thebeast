const mongodb = require('mongodb');
const dotenv = require('dotenv');
const cors = require('cors');
const express = require('express');
const db = require('../api/database');

const app = express();
const port = 8080;

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

/* Routers */
const routes = require("./routes/index");

app.use('/', routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})

module.exports = app;