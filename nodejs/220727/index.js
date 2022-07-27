const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/receive", (req, res) => {
  console.log(req.body);
  let name = req.body.name;
  let msg = req.body.name + " 안녕";
  res.send({ name: name, message: msg });
});

app.get("/test", (req, res) => {
  res.send("test");
});

app.post("/test2", (req, res) => {
  res.send({ name: "test2", message: 1234 });
});

app.listen(port, () => {
  console.log("Server Port : ", port);
});
