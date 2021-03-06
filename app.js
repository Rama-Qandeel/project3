const express = require("express");
const app = express();
const router = require("./mainRouter");
const mongoose = require("./db");
const users = require("./users");
app.use(express.json());
app.use(router);
require("dotenv").config();

const port = 3000;
app.listen(port, () => {
  console.log(`project333 http://localhost:${port}`);
});
