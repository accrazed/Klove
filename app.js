const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.use(bodyParser.urlencoded({
   extended: false
}));

app.use(bodyParser.json());

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("home");
});

// search button 
app.post("/search", function (req, res) {
  const search = req.body.search;
  console.log(search);
  res.redirect("/");
});

let port = process.env.PORT;
if (port == null || port == "")
  port = 8000;

app.listen(port, function() {
  console.log("Server started on port " + port + "...");
});