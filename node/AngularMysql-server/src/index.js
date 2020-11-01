const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mySql = require("mySql");
const events = require("./events");

const connection = mySql.createConnection({
  host: "localhost",
  user: "root",
  password: "1988Sema",
  database: "shop",
});

connection.connect();

const port = process.env.PORT || 8080;

const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(events(connection));

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});