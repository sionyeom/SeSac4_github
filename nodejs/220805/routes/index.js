const express = require("express");
const visitorRouter = express.Router();
const visitor = require("../controller/VisitorController");

// 라우터 정의
visitorRouter.get("/", visitor.get_visitors);
visitorRouter.post("/write", visitor.post_comment);
visitorRouter.post("/select", visitor.select_comment);
visitorRouter.post("/update", visitor.update_comment);
visitorRouter.post("/delete", visitor.delete_comment);
visitorRouter.post("/get", visitor.get_visitor);

module.exports = visitorRouter;
