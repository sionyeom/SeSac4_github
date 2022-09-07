const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

// 예제 1번
app.get("/", (req, res) => {
  console.log("client");
  res.sendFile(__dirname + "/index.html");
});

// 예제 2번
app.get("/example2", (req, res) => {
  console.log("client");
  res.sendFile(__dirname + "/example2.html");
});

// 예제 3번
app.get("/example3", (req, res) => {
  console.log("client");
  res.sendFile(__dirname + "/example3.html");
});

let count = 1;
let userCount = 0;
const userArr = [];
io.on("connect", function(socket) {
  console.log("connected");
  // socket.emit("hello", "server hello");
  // 입장 시
  let name = `사용자_${count++}`;
  userCount++;
  console.log(userCount);
  userArr.push({ name: name, id: socket.id });
  console.log(userArr);
  // 유저 객체에 할당
  socket.emit("clickResponse", socket.id);
  io.emit("name", { name: name, dm: socket.id });
  io.to(socket.id).emit("getName", { name: name, dm: socket.id });
  socket.on("click", data => {
    console.log("client : ", data);
    socket.emit("clickResponse", socket.id);
    // io.emit("clickResponse", "io success");
  });

  socket.on("sendMsg", data => {
    console.log(`${name} : ${data.message}`);
    io.emit("getMsg", data);
  });
  socket.on("changeName", data => {
    name = data.after;
    let beforeName = data.before;
    let dataArr = {
      before: beforeName,
      after: name
    };
    io.to(socket.id).emit("getName", { name: dataArr.after, dm: socket.id });
    io.emit("change name", dataArr);
  });

  socket.on("sendDm", data => {
    // 보내는 이
    let from = data.from;
    // 받는 이
    let to = data.to;
    // 메시지
    let msg = data.msg;
    console.log(data);
    io.to(data.to).emit("getDm", { from: from, msg: msg });
  });

  socket.on("disconnect", reason => {
    userCount--;
    console.log(userCount);
    io.emit("alertDisconnect", { name: name, dm: socket.id });
  });
  // if (userCount++ || userCount--) {
  //   console.log(userCount);
  // }
});

http.listen(8000, () => {
  console.log("Server Port : ", 8000);
});
3;
