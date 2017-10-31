var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'dbmy0101.whservidor.com',
  port     : '3306',
  user     : 'sbtcc',
  password : 'taraverde1958',
  database : 'sbtcc'
});

module.exports = connection;
