/* eslint-disable no-undef */
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./config/db");
db();

const server = express();
server.use(express.json());
server.use(cors());
const Book = require("./models/bookModel.js");
const bookRouter = require("./routes/bookRouter")(Book);

server.use("/api", bookRouter);
server.get("/", (req, res) => {
  res.send("API working!");
});

server.server = server.listen(process.env.PORT || 3000, () => {
  console.log(`Server up and running on port ${process.env.PORT}`);
});

module.exports = server;
