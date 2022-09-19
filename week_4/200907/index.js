const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.use(express.static("public"));

// 예제 1번
// app.get("/", (req, res) => {
//   console.log("client");
//   res.sendFile(__dirname + "/index.html");
// });

// 예제 2번
app.get("/example2", (req, res) => {
  console.log("client");
  res.sendFile(__dirname + "/example2.html");
});
app.get("/demo", (req, res) => {
  console.log("client");
  res.sendFile(__dirname + "/demo.html");
});

// 예제 3번
app.get("/", (req, res) => {
  console.log("client");
  res.sendFile(__dirname + "/example3.html");
});

let count = 1;
let userCount = 0;
let userArr = [];

// NameSpace 1번
const namespace1 = io.of("/namespace1");
namespace1.on("connection", socket => {
  namespace1.emit("news", {
    hello: "Someone connected at namespace1"
  });
});

io.on("connect", function(socket) {
  // 요거 추가
  socket.on("joinRoom", (num, name) => {
    console.log(num, name);
    socket.join("testroom", () => {
      // io.emit("joinRoom", num, name);
    });
    console.log(io.sockets.adapter.rooms);
    // console.log(Object.keys(io.sockets.adapter.sids["testroom"]));
  });
  // 나가기
  socket.on("exitroom", () => {
    socket.leave("testroom", () => {
      // io.emit("joinRoom", num, name);
    });
    console.log(io.sockets.adapter.rooms);
  });

  // 클릭 시 이벤트 예제
  socket.on("click", data => {
    console.log("client : ", data);
    socket.emit("clickResponse", socket.id);
  });

  console.log("connected");
  // socket.emit("hello", "server hello");
  // 입장 시
  let name = `사용자_${count++}`;
  userCount++;

  // 새로운 유저 입장 시 배열에 추가
  userArr.push({ name: name, id: socket.id });

  // 새로운 유저에게 이름 부여
  io.to(socket.id).emit("getName", { name: name, dm: socket.id });

  // 유저 객체에 할당
  socket.emit("clickResponse", socket.id);

  // 다른 사람 입장시
  io.emit("name", { name: name, userArr: userArr });

  // 메시지 보내기
  socket.on("sendMsg", data => {
    console.log(`${name} : ${data.message}`);
    io.emit("getMsg", data);
  });

  // 이름 변경
  socket.on("changeName", data => {
    name = data.after;
    let dataArr = {
      before: data.before,
      after: name,
      id: data.id
    };
    io.to(socket.id).emit("getName", { name: dataArr.after, dm: socket.id });
    // id가 일치할 경우 해당 id의 배열의 name을 변경한다.
    userArr.filter(e => {
      if (e.id == dataArr.id) {
        e.name = dataArr.after;
      }
    });
    // 변경된 이름으로 리스트 갱신한다.
    io.emit("changeName", userArr);
  });

  // 개인 메시지 보내기
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

  // 유저 나갔을 경우 처리
  socket.on("disconnect", reason => {
    userCount--;
    console.log(userCount);
    userArr = userArr.filter(user => {
      return user.id !== socket.id;
    });
    io.emit("alertDisconnect", { name: name, dm: socket.id, userArr: userArr });
  });
});

http.listen(8000, () => {
  console.log("Server Port : ", 8000);
});
