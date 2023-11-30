const express = require("express");
const app = express();
const cors = require("cors");

require("./config/db");

const userRoute = require("./routes/user.route");

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/users", userRoute);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/./views/index.html");
});

//route not found error
app.use((req, res, next) => {
  res.status(400).json({
    message: "Requested route is not found",
  });
});

//server error
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "something broke",
  });
});

module.exports = app;

//api/users :get
//api/users/:id :get
//api/users :post
//api/users/:id :patch
//api/users/:id :delete
