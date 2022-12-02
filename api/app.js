const cors = require('cors');
const express = require('express');

const db = require('../api/database');
const routes = require("./routes/index");

/* Creating an express app on port 8080 */
const app = express();
const port = 3000;

/* Initalizing cors */
var corsOptions = {
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions));

/* Allowing express to use jsons */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Connecting to MongoDB database through mongoose */
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

/* Connecting to routers */
app.use('/', routes);

/* Show the app started */
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})

module.exports = app;
