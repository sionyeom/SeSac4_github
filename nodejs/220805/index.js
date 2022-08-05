// 실행되는 최상위 파일
// Express 를 이용해 서버를 실행하는 로직이 담긴다.
const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
const router = require("./routes");

app.set("view engine", "ejs");
app.use(express.static("uploads"));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/visitor", router);

app.listen(port, () => {
  console.log("Server Port : ", port);
});
