const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const fs = require("fs");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
// 렌더링
app.get("/", function(req, res) {
  res.render("index");
});
app.get("/practice30", function(req, res) {
  res.render("practice_30");
});
app.get("/practice31", function(req, res) {
  res.render("practice_31");
});
app.get("/practice32", function(req, res) {
  res.render("practice_32");
});

// get or post 값 받는 페이지
app.get("/practice_receive", function(req, res) {
  console.log("receive-get");
  console.log(req.query);
  res.render("practice_receive", req.query);
});
app.post("/practice_receive_post", function(req, res) {
  console.log("practice_receive_post");
  console.log(req.body);
  res.render("practice_receive_post", req.body);
});
app.post("/practice_receive_practice32", function(req, res) {
  console.log("save on info.txt");
  // 1. 받아온 값들 콘솔에 출력
  var content = `${req.body.id}//${req.body.name}//${req.body.pw}`;
  console.log(content);
  // 2. 받아 온 값들을 info.txt에 입력하기
  fs.writeFileSync("info.txt", content.toString(), err => {
    if (err) {
      console.error(err);
      return;
    }
    //file written successfully
  });
  res.render("practice_receive_practice32", req.body);
});

app.get("/receive", function(req, res) {
  console.log("receive-get");
  console.log(req.query);
  console.log(req);
  res.render("receive", req.query);
});

app.post("/receive", function(req, res) {
  console.log("receive-post");
  console.log(req.body);
  const { name, year, sport, gender } = req.body;
  res.render("receive", req.body);
});

app.listen(port, () => {
  console.log("Server Port : ", port);
});
