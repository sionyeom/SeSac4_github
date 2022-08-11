const Sequelize = require("sequelize");

const config = require("../config/config.json")["development"];

const db = {};
const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
); 
// ssss 라는 객체에 input 이라는 함수가 있다고 해보자.

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Visitor = require("./Visitor")(sequelize, Sequelize);

module.exports = db;
