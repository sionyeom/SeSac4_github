const mysql = require("mysql");

const cnn = mysql.createConnection({
  host: "127.0.0.1",
  user: "user",
  password: "Password123#@!",
  database: "sesac"
});

exports.get_visitors = cb => {
  cnn.query("select * from visitor;", (err, rows) => {
    if (err) throw err;
    // row는 output
    cb(rows);
  });
};

exports.insert = (name, comment, cb) => {
  var sql = `insert into visitor(name, comment) values ('${name}','${comment}')`;
  cnn.query(sql, (err, rows) => {
    if (err) throw err;

    cb(rows.insertId);
  });
};

// exports.delete = (id, cb) => {
//   var sql = `delete from visitor where id = ${id}`;

//   cnn.query(sql, (err, rows) => {
//     if (err) throw err;

//     cb(id);
//   });
// };

exports.select = (id, cb) => {
  var sql = `select * from visitor where id = '${id}';`;

  cnn.query(sql, (err, rows) => {
    if (err) throw err;
    // console.log(rows);
    cb(rows);
  });
};

exports.update = (id, name, comment, cb) => {
  var sql = `update visitor set name='${name}', comment='${comment}' where id = '${id}'`;

  cnn.query(sql, (err, rows) => {
    if (err) throw err;
    // console.log(rows);
    let dataArr = [id, name, comment];
    cb(dataArr);
  });
};

exports.get_visitor = (id, cb) => {
  // id 컬럼의 값이 id 인 데이터를 1개만 검색한다.
  // console.log(id);
  var sql = `select * from visitor where id = ${id} limit 1;`;

  cnn.query(sql, (err, rows) => {
    if (err) throw err;

    // console.log(rows);
    cb(rows);
  });
};

exports.update = (data, cb) => {
  sql = `update visitor set name='${data.name}', comment='${data.comment}' where id=${data.id};`;

  cnn.query(sql, (err, rows) => {
    if (err) throw err;
    cb(rows);
  });
};

exports.delete = (id, cb) => {
  sql = `delete from visitor where id = ${id}`;

  cnn.query(sql, (err, rows) => {
    if (err) throw err;
    cb(rows);
  });
};
