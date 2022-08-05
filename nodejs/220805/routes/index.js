const express = require("express");
const visitorRouter = express.Router();
const visitor = require("../controller/VisitorController");

visitorRouter.get("/", visitor.get_visitor);
visitorRouter.post("/write", visitor.post_comment);
visitorRouter.post("/modify", visitor.modify_comment);
visitorRouter.post("/delete", visitor.delete_comment);

module.exports = visitorRouter;
