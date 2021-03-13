const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function (req, res) {
    res.render("home");
});

app.get("/prefrences", function (req, res) {
    res.render("prefrences");
});

let port = process.env.PORT;
if (port == null || port == "")
  port = 3000;

app.listen(port, function() {
  console.log("Server started on port " + port + "...");
});
