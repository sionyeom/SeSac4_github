const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 8080;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser().json());

app.get("/", function(req, res) {});

app.listen(port, () => {
  console.log("Server Port : ", port);
});
