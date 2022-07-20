function call(name) {
  setTimeout(() => {
    console.log(name);
    return name;
  }, 1000);
}

async function back() {
  setTimeout(() => {
    console.log("back");
    return "back";
  }, 1000);
}

async function hell() {
  setTimeout(() => {
    console.log("callback hell");
    return "callback hell";
  }, 1000);
}

async function exec() {
  let name = await call("kim");
  console.log(name + "반가워");
  let txt = await back();
  console.log(txt + "을 실행했구나");
  let message = await hell();
  console.log("여기는 " + message);
}

exec();
