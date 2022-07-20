const http = require("http");
const fs = require("fs").promises;

const server = http.createServer(async function(req, res) {
  try {
    const data = await fs.readFile("./test.html");
    res.writeHead(200);
    res.end(data);
  } catch (err) {
    console.err(err);
    res.writeHead(404);
    res.end(err.message);
  }
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
