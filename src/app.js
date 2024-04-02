const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

app.set("port", process.env.PORT || 3002);

module.exports = app;