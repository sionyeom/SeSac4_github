const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const fs = require("fs");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/practice33", (req, res) => {
  res.render("practice33");
});
app.get("/practice34", (req, res) => {
  res.render("practice34");
});
app.get("/practice35-1", (req, res) => {
  res.render("practice35-1");
});
app.get("/practice35-2", (req, res) => {
  res.render("practice35-2");
});
app.get("/practice35-3", (req, res) => {
  res.render("practice35-3");
});
app.get("/practice35-4", (req, res) => {
  res.render("practice35-4");
});

app.get("/receive", (req, res) => {
  console.log(req.query);
  let name = req.query.name;
  let msg = req.query.name + " GET 안녕";
  res.send({ name: name, message: msg });
});
app.get("/receive-practice33", (req, res) => {
  let data = req.query;
  console.log(req.query);
  res.send(req.query);
});
app.post("/receive-practice34", (req, res) => {
  console.log(req.body);
  // 1. info.txt의 내용을 //로 구분하여 배열에 담는다.
  const data = fs
    .readFileSync("info.txt", { encoding: "utf8", flag: "r" })
    .split("//");
  // 2. req.body로 받아온 값들을 저장한다.
  let id = req.body.id;
  let pw = req.body.pw;
  // 3. 다시 프론트로 데이터를 뿌려준다.
  res.send({ data: data, id: id, pw: pw });
});

app.post("/receive", (req, res) => {
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
