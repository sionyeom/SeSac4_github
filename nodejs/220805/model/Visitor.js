const mysql = require("mysql");

const cnn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "Password123#@!",
  database: "sesac"
});

exports.get_visitor = cb => {
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

    console.log(rows);
    cb(rows.insertId);
  });
};

exports.delete = id => {
  var sql = `insert into visitor(name, comment) values (${name}, ${comment})
  delete from visitor where id = "1";`;
  cnn.query(sql, (err, rows) => {
    if (err) throw err;

    console.log(rows);
    cb(rows.insertId);
  });
};
