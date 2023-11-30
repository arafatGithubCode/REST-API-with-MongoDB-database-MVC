const mongoose = require("mongoose");
const config = require("./config");

const dbURL = config.db.ulr;

mongoose
  .connect(dbURL)
  .then(() => {
    console.log("mongoDB atlas is connected");
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
