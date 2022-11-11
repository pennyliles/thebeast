const mongodb = require('mongodb');
const dotenv = require('dotenv');
const cors = require('cors');
const express = require('express');
const db = require('../api/database');

db.connectToMongo();

const app = express();
app.use(cors());

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Routers */
const routes = require("./routes/index");

app.use('/', routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})

module.exports = app;