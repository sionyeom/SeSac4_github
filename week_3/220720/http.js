const http = require("http");

const server = http.createServer(function(req, res) {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf8;" });
  // 한글 깨짐 방지
  res.write("<h1>안녕</h1>");
  // 적고 나서 응답을 종료하는 것
  res.end("<p>hi</p>");
});

server.listen(8000, function() {
  console.log("8000번 포트");
});

server.on("request", function() {
  console.log("Client Request");
});

server.on("connection", function() {
  console.log("Client Connection");
});

server.on("checkContinue", function() {
  console.log("Client checkContinue");
});
