// function func() {
//   return new Promise(function(res, rej) {
//     res(1);
//   });
// }

async function func() {
  return 1;
}

func().then(function(result) {
  console.log(result);
});

function login(id, pw) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log("사용자 입장");
      resolve(id);
    }, 3000);
  });
}

function getVideo(id) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(["아이언맨1", "아이언맨2"]);
    }, 2000);
  });
}

function getDetail(video) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("비디오 제목은 :" + video);
    }, 2000);
  });
}

async function exec() {
  let user = await login("kim", "1234");
  let videos = await getVideo(user);
  console.log(videos);
  let title = await getDetail(videos[0]);

  console.log(title);
}

exec();
