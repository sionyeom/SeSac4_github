const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.static("uploads"));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes폴더안에 index.js라고 했기에 자동적으로 불러온다.
const router = require("./routes");
app.use("/", router);

// 홈 디렉토리를 설정할 수 있다.
// app.use("/app", router);

// 컨텐츠 별로 디렉토리를 별도로 구성할 수 있다.
// const board = require("./routes/board");
// app.use("/board", board);

app.listen(port, () => {
  console.log("Server Port : ", port);
});
