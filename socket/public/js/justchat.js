var socket = io.connect();

socket.on("connect", function () {
  console.log("server connected");
});

// 이름 지정
socket.on("getName", (data) => {
  $("input[name=id]").val(data.name);
  $("input[name=chg]").val($("input[name=id]").val());
  $("input[name=dm-id]").val(data.dm);
  $(".myname").text(`어서오세요. ${$("input[name=id]").val()}님`);
  scroll();
});

// 이름 변경 시 리스트 갱신
socket.on("changeName", (data) => {
  let userArr = data;
  // 리스트 갱신
  $(".user-list").empty();
  let id = $("input[name=id]").val();
  let list = userArr.filter((arr) => {
    return arr.name != id;
  });
  console.log(list);
  // 배열에 따른 반복 html 코드 삽입
  list.forEach((e) => {
    $(".user-list").append(
      `<div class="user" id="${e.id}" onclick="getId(this);">${e.name}</div>`
    );
  });

  console.log(data);
});

// 입장시
socket.on("name", (data) => {
  let userArr = data.userArr;
  // 리스트 갱신
  $(".user-list").empty();
  let id = $("input[name=id]").val();
  let list = userArr.filter((arr) => {
    return arr.name != id;
  });

  // 배열에 따른 반복 html 코드 삽입
  list.forEach((e) => {
    $(".user-list").append(
      `<div class="user" id="${e.id}" onclick="getId(this);">${e.name}</div>`
    );
  });

  // 메시지 박스 알림
  $(".box").append(
    `<div class="message">${data.name}님이 입장하셨습니다.</div>`
  );
  scroll();
});

// 닉네임이 변경되었을 시
socket.on("change name", (data) => {
  $(".box").append(
    `<div class="message">${data.before}님이 ${data.after}로 변경했습니다.</div>`
  );
  scroll();
});

// 다른 사람 나갈시
socket.on("alertDisconnect", (data) => {
  console.log(data);
  // 메시지 알림
  $(".box").append(
    `<div class="message">${data.name}님이 나가셨습니다..</div>`
  );

  // html 초기화
  $(".user-list").empty();
  let userArr = data.userArr;
  let id = $("input[name=id]").val();
  let list = userArr.filter((arr) => {
    return arr.name != id;
  });
  console.log(list);
  // 리스트 갱신 html 반복
  list.forEach((e) => {
    $(".user-list").append(
      `<div class="user" id="${e.id}" onclick="getId(this);">${e.name}</div>`
    );
  });

  scroll();
});

// 메시지 받기
socket.on("getMsg", (data) => {
  // 내 이름과 다를 시에만 메시지창을 띄움
  if (data.name != $("input[name=id]").val()) {
    let time = getNow();
    $(".box").append(
      `<div class="your-meg-container">
                <div class="opponent-id">${data.name}</div>
                <div class="yourmessage">${data.message}</div>
                <div class="meg-time">${time}</div>
      </div>`
    );
    scroll();
  }
});

// 개인 메시지 받기
socket.on("getDm", (data) => {
  let time = getNow();
  $(".box").append(
    `<div class="your-meg-container">
    <div class="opponent-id">(DM) ${data.from}</div>
    <div class="yourmessage dm">${data.msg}</div>
    <div class="meg-time">${time}</div>
</div>`
  );
});

function sendMsg() {
  let id = $("input[name=id]").val();
  let message = $("input[name=txt]").val();
  let data = { name: id, message: message };

  // 메시지가 비어있을 경우 보내지 않는다.
  if (message !== "") {
    socket.emit("sendMsg", data);
    // 현재 시간 할당
    let time = getNow();
    // 입력한 메시지 채팅방에 출력
    $(".box").append(
      `<div class="my-meg-container">
        <div class="meg-time">${time}</div>
        <div class="mymessage">${data.message}</div>
      </div>`
    );
    // input 값 초기화
    $("input[name=txt]").val("");
    scroll();
  }
}
function changeName() {
  let id = $("input[name=id]").val();
  let name = $("input[name=chg]").val();
  let dm_id = $("input[name=dm-id]").val();
  let data = { before: id, after: name, id: dm_id };
  socket.emit("changeName", data);
  $("input[name=chg]").val("");
  alert(`${id}에서 ${name}으로 닉네임이 변경되었습니다!`);
  $("#rename-modal").toggle();
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

// 이름 변경 모달 출력
function openRename() {
  $("#rename-modal").toggle();
}

// 공지 등록 모달 출력
function openNoticeWrite() {
  $("#notice-modal-type").toggle();
}
// 유투브 영상 공유 모달 출력
function openYoutube() {
  $("#youtube-modal-type").toggle();
}

function namespace(nsp) {
  socket.emit("joinRoom", "1", "sion");
  socket.on("joinRoom", (num, name) => {});
}
function exitroom(nsp) {
  socket.emit("exitroom");
  socket.on("exitRoom", () => {
    console.log("success");
  });
}
// 현재 시간 반환 함수
function getNow() {
  const date = new Date();
  return date.toLocaleTimeString("ko-kr");
}
// 유투브 링크 전송 함수
const sendYoutubeLink = () => {
  let youtubeLink = $("input[name=modal-input-youtube]").val();
  // 메시지가 비어있을 경우 보내지 않는다.
  if (youtubeLink !== "") {
    socket.emit("sendYoutubeLink", youtubeLink);
    // 현재 시간 할당
    let time = getNow();
    // 입력한 메시지 채팅방에 출력
    $(".box").append(
      `<div class="my-meg-container">
      <div class="meg-time">${time}</div>
      <div class="mymessage youtube">
        <iframe
          width="400"
          height="300"
          id = ${youtubeLink}
          src="${youtubeLink}"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
        </div>`
    );
    // input 값 초기화
    $("input[name=modal-input-youtube]").val("");
    scroll();
    checkYoutubeLink($(`${youtubeLink}`));
    openYoutube();
  }
};

const checkYoutubeLink = (target) => {
  console.log(target.find("pre"));
};

// socket으로 유투브링크 받아서 영상 개재 함수
socket.on("sendYoutubeLink", (data) => {
  let { name, link } = data;
  console.log(link);
  console.log(name);
  if (data.name != $("input[name=id]").val()) {
    let time = getNow();
    $(".box").append(
      `<div class="your-meg-container">
        <div class="opponent-id">${name}</div>
        <div class="yourmessage youtube">
          <iframe
          width="400"
          height="300"
          src="${link}"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
          </iframe>
        </div>
        <div class="meg-time">${time}</div>
      </div>`
    );
    scroll();
  }
});

// 공지사항 보내기
const sendNotice = () => {
  let noticeText = $("input[name=modal-rename-input]").val();
  // 공지사항 적었을 경우 실행
  if (noticeText != "") {
    socket.emit("sendNoticeText", {
      name: $("input[name=id]").val(),
      text: noticeText,
    });
    openNoticeWrite();
  }
};

// socket으로 공지사항 받기
socket.on("getNoticeText", (data) => {
  let writer = data.name;
  let noticeText = data.text;
  // 공지사항 출력
  $(".notice-container").html(
    `<div class="notice-writer">${writer}</div>
    <div class="notice-text">${noticeText}</div>`
  );
  // 채팅창에 알리기
  $(".box").append(
    `<div class="message">공지사항을 확인해주세요. (${writer} - ${noticeText})</div>`
  );
  // 공지사항이 있을 경우 공지사항 노출 없을시 미노출
  if ($(".notice-writer").text() != "" && $(".notice-text").text() != "") {
    $("#notice-show-modal").css("display", "block");
  } else {
    $("#notice-show-modal").css("display", "none");
  }
  // 아이콘 효과
  $(".fa-sharp.fa-solid.fa-circle-exclamation").addClass("fa-beat-fade");
});

const openNotice = () => {
  $("#notice-show-modal").toggle();
};

// 즉시 실행 함수
$(() => {
  $(".txt").emojiPicker({ position: "right" });

  // 엔터 누르면 메시지 전송
  $(".txt").on("keyup", function (key) {
    if (key.keyCode == 13) {
      sendMsg();
    }
  });
});

// 플러스 모달 open 함수
function openPlusModal() {
  $(".txt-plus-container").toggle();
  if ($(".txt-plus-container").css("display") === "block") {
    // 플러스 버튼 css 처리
    $(".txt-plus-btn").css("background-color", "#dae5d0");
  } else {
    $(".txt-plus-btn").css("background-color", "#a0bcc2");
  }
}
