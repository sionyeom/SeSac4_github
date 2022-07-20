function promise1(flag) {
  return new Promise(function(res, rej) {
    if (flag) {
      res("then으로 연결");
    } else {
      rej("catch로 연결");
    }
  });
}

promise1(true)
  .then(function(result) {
    console.log("then : ", result);
  })
  .catch(function(err) {
    console.log("catch : ", err);
  });

promise1(false)
  .then(function(result) {
    console.log("then : ", result);
  })
  .catch(function(err) {
    console.log("catch : ", err);
  });
