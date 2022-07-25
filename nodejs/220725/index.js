const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.render("index");
});

app.get("/receive", function(req, res) {
  console.log("receive-get");
  res.render("index");
});

app.post("/receive", function(req, res) {
  console.log("receive-post");
  res.render("index");
});

app.listen(port, () => {
  console.log("Server Port : ", port);
});
