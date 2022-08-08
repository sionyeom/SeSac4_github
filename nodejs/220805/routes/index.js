const express = require("express");
const visitorRouter = express.Router();
const visitor = require("../controller/VisitorController");

// 라우터 정의
visitorRouter.get("/", visitor.get_visitors);
visitorRouter.post("/write", visitor.post_comment);
visitorRouter.post("/select", visitor.select_comment);
visitorRouter.post("/update", visitor.update_comment);
// visitorRouter.post("/delete", visitor.delete_comment);
visitorRouter.get("/get", visitor.get_visitor);
visitorRouter.patch("/edit", visitor.patch_comment);
visitorRouter.delete("/delete", visitor.delete_comment);

module.exports = visitorRouter;
