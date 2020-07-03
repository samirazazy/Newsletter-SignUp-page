const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
  firstName = req.body.fName;
  firstName = req.body.lName;
  email = req.body.email;
  console.log(firstName, firstName, email);
});

app.listen(3000, function () {
  console.log("server started");
});
