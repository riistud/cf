const express = require("express");
const morgan = require("morgan");

const cfsolver = require("./cfsolver");

const app = express();

app.use(express.json());
app.set("json spaces", 2);
app.use(morgan("dev"));

app.use("/cfsolver", cfsolver);

module.exports = app;
