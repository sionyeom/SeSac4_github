// 경로를 지정한다.
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Index");
});

router.get("/a", (req, res) => {
  res.send("a");
});

module.exports = router;
