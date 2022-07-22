const http = require("http");
const fs = require("fs");

const server = http.createServer(async function(req, res) {
  try {
    const html = fs.readFileSync("/var/www/html/html/index.html", "utf8");
    res.writeHead(200, { "Content-Type": "text/html; charset=utf8" });
    res.end(html);
  } catch (err) {
    res.writeHead(404);
    res.end(err.message);
  }
});

server.listen(8080, function() {
  console.log("8080번 포트");
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
