const express = require("express");
const app = express();
const port = 8080;

app.set("view engine", "ejs");
app.use("/abc", express.static("public"));
// 가상 경로 /abc를 만들어준다
// 정적 파일 관리

app.get("/", (req, res) => {
  list = [1, 2, 3];
  res.render("test/project", { a: "asd", b: "asd", list: list });
  // ejs 파일일 이용할 것이고, views 폴더에 자동적으로 접근한다.
});

app.listen(port, () => {
  console.log("Server Port : ", port);
});
