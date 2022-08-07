const Visitor = require("../model/Visitor");

exports.get_visitor = (req, res) => {
  // mysql 패키지는 promise가 지원이 안됨.
  Visitor.get_visitor(function(result) {
    // console.log("result : ", result);
    // res.send(result);
    res.render("index", { data: result });
  });
};

exports.post_comment = function(req, res) {
  // console.log(req.body);
  Visitor.insert(req.body.name, req.body.comment, function(result) {
    res.send({ id: result });
  });
};

exports.modify_comment = function(req, res) {
  console.log(req.body);
};

exports.delete_comment = function(req, res) {
  Visitor.delete(req.body.id, function(result) {
    res.send({ id: result });
  });
};

exports.select_comment = function(req, res) {
  Visitor.select(req.body.id, function(result ) {
    // console.log(result);
    res.send({data : result})
  })
}

exports.update_comment = function (req, res) {
  Visitor.update(req.body.id, req.body.name, req.body.comment, function (result) {
    // console.log(result);
    res.send({data : result});
  })   
}