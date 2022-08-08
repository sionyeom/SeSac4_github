const Member = require("../model/Member");

exports.get_register = (req, res) => {
  res.render("register");
};

exports.post_register = (req, res) => {
  Member.register(req.body, function(result) {
    res.send(result);
  });
};

exports.get_main = (req, res) => {
  Member.get_members(function(result) {
    res.render("main", { data: result });
  });
};

exports.get_member = (req, res) => {
  Member.get_member(req.query.id_no, function(result) {
    res.send(result[0]);
  });
};

exports.post_modifyInfo = (req, res) => {
  Member.modify(req.body, function(result) {
    res.send("회원정보가 변경되었습니다!");
  });
};

exports.delete_deleteInfo = (req, res) => {
  Member.delete(req.body.no, function(result) {
    res.send("회원탈퇴가 완료되었습니다!");
  });
};

exports.get_login = (req, res) => {
  res.render("login");
};

exports.post_login = (req, res) => {
  Member.login(req.body, result => {
    res.send(result);
  });
};
