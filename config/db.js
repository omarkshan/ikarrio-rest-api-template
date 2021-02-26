require("dotenv").config();
const mongoose = require("mongoose");

const db = () => {
  let database;
  if (process.env.ENV === "Test") {
    database = mongoose
      .connect(process.env.TEST_DATABASE_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("Database connected successfully..."))
      .catch((err) => console.error(err));
  } else {
    database = mongoose
      .connect(process.env.PROD_DATABASE_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("Database connected successfully..."))
      .catch((err) => console.error(err));
  }
  return database;
};

module.exports = db;
