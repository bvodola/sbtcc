var mysql = require('mysql');
var config = require('./config');
var db = config.db;


var connection = mysql.createConnection({
  host     : db.host,
  port     : db.port,
  user     : db.user,
  password : db.password,
  database : db.database
});

module.exports = connection;
