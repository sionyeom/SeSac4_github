var socket = io.connect();

socket.on("connect", function() {
  console.log("server connected");
});

// 이름 지정
socket.on("getName", data => {
  $("input[name=id]").val(data.name);
  $("input[name=dm-id]").val(data.dm);
  $(".myname").text(`어서오세요. ${$("input[name=id]").val()}님`);
  scroll();
});

// 이름 변경 시 리스트 갱신
socket.on("changeName", data => {
  let userArr = data;
  // 리스트 갱신
  $(".user-list").empty();
  let id = $("input[name=id]").val();
  let list = userArr.filter(arr => {
    return arr.name != id;
  });

  // 배열에 따른 반복 html 코드 삽입
  list.forEach(e => {
    $(".user-list").append(
      `<div class="user" id="${e.id}" onclick="getId(this);">${e.name}</div>`
    );
  });

  console.log(data);
});

// 입장시
socket.on("name", data => {
  let userArr = data.userArr;
  // 리스트 갱신
  $(".user-list").empty();
  let id = $("input[name=id]").val();
  let list = userArr.filter(arr => {
    return arr.name != id;
  });

  // 배열에 따른 반복 html 코드 삽입
  list.forEach(e => {
    $(".user-list").append(
      `<div class="user" id="${e.id}" onclick="getId(this);">${e.name}</div>`
    );
  });

  // 메시지 박스 알림
  $(".box").append(`<div class="message">${data.name}님이 입장하셨습니다.</div>`);
  scroll();
});

// 닉네임이 변경되었을 시
socket.on("change name", data => {
  $(".box").append(
    `<div class="message">${data.before}님이 ${data.after}로 변경했습니다.</div>`
  );
  scroll();
});

// 다른 사람 나갈시
socket.on("alertDisconnect", data => {
  console.log(data);
  // 메시지 알림
  $(".box").append(`<div class="message">${data.name}님이 나가셨습니다..</div>`);

  // html 초기화
  $(".user-list").empty();
  let userArr = data.userArr;
  let id = $("input[name=id]").val();
  let list = userArr.filter(arr => {
    return arr.name != id;
  });
  console.log(list);
  // 리스트 갱신 html 반복
  list.forEach(e => {
    $(".user-list").append(
      `<div class="user" id="${e.id}" onclick="getId(this);">${e.name}</div>`
    );
  });

  scroll();
});

// 메시지 받기
socket.on("getMsg", data => {
  // 내 이름과 다를 시에만 메시지창을 띄움
  if (data.name != $("input[name=id]").val()) {
    $(".box").append(
      `<div class="your-meg-container"><div class="yourmessage">${data.name} : ${data.message}</div></div>`
    );
    scroll();
  }
});

// 개인 메시지 받기
socket.on("getDm", data => {
  console.log(data.from, data.msg);
  $(".box").append(
    `<div class="your-meg-container"><div class="yourmessage dm">(DM) ${data.from} : ${data.msg}</div></div>`
  );
});

function sendMsg() {
  let id = $("input[name=id]").val();
  let message = $("input[name=txt]").val();
  let data = { name: id, message: message };
  socket.emit("sendMsg", data);
  $("input[name=txt]").val("");
  $(".box").append(
    `<div class="my-meg-container"><div class="mymessage">${data.message}</div></div>`
  );
  scroll();
}
function changeName() {
  let id = $("input[name=id]").val();
  let name = $("input[name=chg]").val();
  let dm_id = $("input[name=dm-id]").val();
  let data = { before: id, after: name, id: dm_id };
  socket.emit("changeName", data);
  $("input[name=chg]").val("");
  alert(`${id}에서 ${name}으로 닉네임이 변경되었습니다!`);
  // $(".box").append(`<div class="my-meg-container"><div class="mymessage">${data.message}</div></div>`);
}

// 스크롤 자동 갱신
function scroll() {
  let chat = document.querySelector(".box");
  chat.scrollTop = chat.scrollHeight;
}

function getId(target) {
  // dm을 위한 id값 할당
  let dm_id = $(target).attr("id");
  let dm_name = $(target).text();
  $(".dm-user").text(dm_name);
  $("input[name=dm-id]").val(dm_id);
  $(".dm-container").show();
}
function sendDm() {
  let dm_writer = $("input[name=id]").val();
  let dm_id = $("input[name=dm-id]").val();
  let dm_msg = $("input[name=dm_msg]").val();
  console.log(dm_writer, dm_id, dm_msg);
  socket.emit("sendDm", { from: dm_writer, to: dm_id, msg: dm_msg });
  $("input[name=dm_msg]").val("");
}
function exitDm() {
  $(".dm-container").hide();
}
