const express = require("express");
require("dotenv").config();

const server = express();

server.get("/", (req, res) => {
  res.send("API working!");
});

server.listen(process.env.PORT, () => {
  console.log(`Server up and running on port ${process.env.PORT}`);
});
