const User = require("../model/User");
const { unsubscribe } = require("../routes");

exports.index = (req, res) => {
  res.render("index");
};

exports.register = (req, res) => {
  res.render("register");
};

exports.post_register = (req, res) => {
  // req.body를 보내서 가능
  User.post_user(req.body);
  res.send(req.body);
};

exports.login = (req, res) => {
  res.render("login");
};

exports.post_login = async (req, res) => {
  var data = await User.get_user();
  console.log(data);

  // User.post_login(req.body);
};
