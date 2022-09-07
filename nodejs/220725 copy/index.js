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
app.get("/practice33", function(req, res) {
  res.render("practice_33");
});

// get or post 값 받는 페이지
app.get("/practice_receive", function(req, res) {
  res.render("practice_receive", req.query);
});
app.post("/practice_receive_post", function(req, res) {
  res.render("practice_receive_post", req.body);
});
app.post("/practice_receive_practice32", function(req, res) {
  console.log("save on info.txt");
  // 1. 받아온 값들 콘솔에 출력
  var content = `${req.body.id}//${req.body.name}//${req.body.pw}`;
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

app.post("/practice_receive_practice33", function(req, res) {
  // 1. info.txt의 내용을 //로 구분하여 배열에 담는다.
  const data = fs
    .readFileSync("info.txt", { encoding: "utf8", flag: "r" })
    .split("//");
  // 2. res에 받아온 값과 배열의 첫번째 값과 마지막 값을 비교하는 조건문을 작성한다.
  if (data[0] == req.body.id && data[2] == req.body.pw) {
    console.log("로그인에 성공했습니다.");
  } else if (data[0] == req.body.id && data[2] != req.body.pw) {
    console.log("비밀번호를 확인해주세요.");
  } else if (data[0] != req.body.id && data[2] == req.body.pw) {
    console.log("아이디를 확인해주세요.");
  } else {
    console.log("아이디와 비밀번호를 확인해주세요.");
  }
});

app.get("/receive", function(req, res) {
  console.log("receive-get");
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
