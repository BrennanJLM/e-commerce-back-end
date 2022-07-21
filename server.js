require('dotenv').config();

const express = require('express');
const routes = require('./app/routes');

// import sequelize connection
const db = require("./app/config/connection");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);


// sync sequelize models to the database, then turn on the server

db.sequelize.sync()
  .then(() => {
    console.log("Synced DB.");
    app.listen(PORT, async() => {
      console.log(`App listening on port ${PORT}!`);
    });
  })
  .catch((err) => {
    console.log("Failed to sync DB: " + err.message);
  });
