const express = require("express");
const http = require("http");
const path = require("path");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const usersRoute = require('./routes/users');

dotenv.config();

const app = express();

app.use(express.static(__dirname + "/src"));
app.use(express.static(__dirname + "/assets"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/users', usersRoute);

app.listen(process.env.PORT, () =>
  console.log(`Server is listening on port ${process.env.PORT}`)
);
