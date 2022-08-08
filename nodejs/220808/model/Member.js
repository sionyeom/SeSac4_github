const mysql = require("mysql");

const cnn = mysql.createConnection({
  host: "127.0.0.1",
  user: "user",
  password: "Password123#@!",
  database: "sesac"
});

exports.register = (data, cb) => {
  sql = `insert into member (id, pw, name) values ('${data.id}','${data.pw}','${data.name}');`;

  cnn.query(sql, (err, rows) => {
    if (err) throw err;
    // row는 output
    cb(data);
  });
};

exports.get_members = cb => {
  cnn.query("select * from member;", (err, rows) => {
    if (err) throw err;
    // row는 output
    cb(rows);
  });
};

exports.get_member = (id_no, cb) => {
  let sql = `select * from member where id_no = ${id_no} limit 1`;

  cnn.query(sql, (err, rows) => {
    if (err) throw err;
    cb(rows);
  });
};

exports.modify = (data, cb) => {
  sql = `update member set id='${data.id}', name='${data.name}' where id_no=${data.no};`;

  cnn.query(sql, (err, rows) => {
    if (err) throw err;
    cb(rows);
  });
};

exports.delete = (id_no, cb) => {
  sql = `delete from member where id_no = ${id_no}`;
  cnn.query(sql, (err, rows) => {
    if (err) throw err;
    cb(rows);
  });
};

exports.login = (data, cb) => {
  sql = `select * from member where id='${data.id}' and pw='${data.pw}';`;

  cnn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    cb(rows);
  });
};
