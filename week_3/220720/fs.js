const fs = require("fs").promises;

// fs.readFile("./text.txt", (err, data) => {
//   if (err) throw err;
//   // 에러 출력 및 break;

//   console.log(data.toString());
// });

// fs
//   .writeFile("./write.txt", "안녕")
//   .then(() => {
//     console.log("작성 완료");
//   })
//   .catch(err => {
//     console.log(err);
//   });

// fs
//   .copyFile("./write.txt", "./copied.txt")
//   .then(() => {
//     console.log("복사 완료");
//   })
//   .catch(err => {
//     throw err;
//   });

async function exec() {
  await fs
    .writeFile("./write.txt", "안녕")
    .then(() => {
      console.log("작성 완료");
    })
    .catch(err => {
      console.log(err);
    });
  await fs
    .copyFile("./write.txt", "./copied.txt")
    .then(() => {
      console.log("복사 완료");
    })
    .catch(err => {
      throw err;
    });
}

exec();
