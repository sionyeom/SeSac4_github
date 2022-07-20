const fs = require("fs");

fs.readFile("./text.txt", (err, data) => {
  if (err) throw err;
  // 에러 출력 및 break;

  console.log(data.toString());
});
