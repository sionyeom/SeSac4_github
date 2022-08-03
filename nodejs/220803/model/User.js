const fs = require("fs").promises;

exports.post_user = function(data) {
  const { id, name, pw, age } = data;
  console.log(data);
  // 1. 받아온 값들 콘솔에 출력
  var content = `${id}//${name}//${pw}//${age}`;
  // 2. 받아 온 값들을 info.txt에 입력하기
  fs.writeFileSync("info.txt", content.toString(), err => {
    if (err) {
      console.error(err);
      return;
    }
    //file written successfully
  });
};

exports.get_user = async () => {
  var buffer = await fs.readFile("./info.txt");
  return buffer.toString();
};

exports.post_login = data => {
  const { id, pw } = data;
  console.log(data);
  const dataArr = fs
    .readFileSync("info.txt", { encoding: "utf8", flag: "r" })
    .split("//");
};
