const fs = require("fs").promises;

async function exec() {
  await fs.mkdir("sesac");
  await fs.writeFile("./sesac/sesac.txt", "반갑습니다.");
  await fs.copyFile("./sesac/sesac.txt", "./sesac/sesac2.txt");
  await fs.rename("./sesac/sesac2.txt", "./sesac/new.txt");
}

exec();
