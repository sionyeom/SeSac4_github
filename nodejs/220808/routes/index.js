const express = require("express");
const memberRouter = express.Router();
const member = require("../controller/MemberController");

// 라우터 정의
// 회원가입
memberRouter.get("/register", member.get_register);
memberRouter.post("/post_register", member.post_register);
// 메인화면
memberRouter.get("/main", member.get_main);
memberRouter.get("/get", member.get_member);
memberRouter.post("/modifyInfo", member.post_modifyInfo);
memberRouter.delete("/deleteInfo", member.delete_deleteInfo);
// 로그인
memberRouter.get("/login", member.get_login);
memberRouter.post("/post_login", member.post_login);

module.exports = memberRouter;
