const User = require("../model/User");
const fs = require("fs");

exports.index = (req, res) => {
  res.render("index");
};

exports.register = (req, res) => {
  res.render("register");
};

exports.post_register = (req, res) => {
  // req.body를 보내서 가능
  User.post_user(req.body);
  res.redirect("login");
};

exports.login = (req, res) => {
  res.render("login");
};

exports.post_login = async (req, res) => {
  var data = await User.get_user();
  // 1. 기존 데이터 배열로 저장
  var loginResult = false;
  var postArr = [];
  for (i = 0; i < data.length; i++) {
    if (data[i][0] === req.body.id && data[i][1] === req.body.pw) {
      loginResult = true;
      postArr = data[i];
    } else {
      loginResult = false;
    }
  }

  if (loginResult) {
    // profile을 불러오면서 값을 전달한다.
    res.render("profile", { postArr });
  } else {
    res.send("로그인 실패");
  }
};
