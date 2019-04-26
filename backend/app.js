const express = require('express');
const app = express();
const signuproute = require('./routes/signup');
const bodyParser = require("body-parser");

app.use("/user",signuproute);

module.exports = app;
