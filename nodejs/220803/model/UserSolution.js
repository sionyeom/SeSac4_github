const fs = require("fs");

exports.post_user = function(data) {
  // 1. 기존 데이터 읽어와서 4개씩 배열로 만들기
  var text = fs.readFileSync("info.txt", { encoding: "utf8", flag: "r" });
  var dataArr = fs
    .readFileSync("info.txt", { encoding: "utf8", flag: "r" })
    .split("\n");
  var result = [];
  for (i = 0; i < dataArr.length; i++) {
    var arr = dataArr[i].split("//");
    result.push(arr);
  }
  // 3. 새로 들어온 데이터 받아오기
  const { id, name, pw, age } = data;
  // 3-1. 기존 데이터에 새로 들어온 데이터 더하기
  var content = `${text}\n${id}//${pw}//${name}//${age}//../../${id}.png`;
  // 4. 다시 쓰기
  fs.writeFileSync("info.txt", content.toString(), err => {
    if (err) {
      console.error(err);
      return;
    }

    //file written successfully
  });
};

exports.getData = () => {
  // 1. 읽어와서 배열로 저장
  var dataArr = fs
    .readFileSync("info.txt", { encoding: "utf8", flag: "r" })
    .split("\n");
  var result = [];
  for (i = 0; i < dataArr.length; i++) {
    var arr = dataArr[i].split("//");
    result.push(arr);
  }
  console.log(result);
};

exports.get_user = async () => {
  var buffer = await fs.readFileSync("info.txt", {
    encoding: "utf8",
    flag: "r"
  });
  var dataArr = fs
    .readFileSync("info.txt", { encoding: "utf8", flag: "r" })
    .split("\n");
  var result = [];
  for (i = 0; i < dataArr.length; i++) {
    var arr = dataArr[i].split("//");
    result.push(arr);
  }

  return result;
};

exports.post_login = async (req, res) => {
  for (let i = 0; i < infos.length; i++) {
    var info = data.split("//");
    if (info[0] != req.body.id) {
      res.send("성공");
      return false;
    }
  }
  res.send("실패");
};

exports.login = (dataArr, req, res) => {};
