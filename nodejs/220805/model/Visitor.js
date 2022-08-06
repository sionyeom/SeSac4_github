const mysql = require("mysql");

const cnn = mysql.createConnection({
  host: "127.0.0.1",
  user: "user",
  password: "Password123#@!",
  database: "sesac",
});

exports.get_visitor = (cb) => {
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

    // console.log(rows);
    cb(rows.insertId);
  });
};

exports.delete = (id,cb) => {
  var sql = `delete from visitor where id = ${id}`

  cnn.query(sql, (err, rows) => {
    if (err) throw err;

    cb(id);
  });
};
