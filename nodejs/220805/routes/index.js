const express = require("express");
const visitorRouter = express.Router();
const visitor = require("../controller/VisitorController");

visitorRouter.get("/", visitor.index);

module.exports = visitorRouter;
