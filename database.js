var mysql = require('mysql');
var config = require('./config');
var db = config.db;

var db_config = {
  host     : db.host,
  port     : db.port,
  user     : db.user,
  password : db.password,
  database : db.database
};

// var connection;
// function handleDisconnect() {
//   connection = mysql.createConnection(db_config);
//
//   connection.connect(function(err) {
//     if(err) {
//       console.log('error when connecting to db:', err);
//       setTimeout(handleDisconnect, 2000);
//     }
//   });
//
//   connection.on('error', function(err) {
//     console.log('db error', err);
//     if(err.code === 'PROTOCOL_CONNECTION_LOST') {
//       handleDisconnect();
//     } else {
//       throw err;
//     }
//   });
// }
//
// handleDisconnect();

// module.exports = connection;

var pool = mysql.createPool(db_config);

var query = function(){
  var sql_args = [];
  var args = [];
  for(var i=0; i<arguments.length; i++){
      args.push(arguments[i]);
  }
  var callback = args[args.length-1];
  pool.getConnection(function(err, connection) {
    if(err) {
      console.log(err);
      return callback(err);
    }
    if(args.length > 2){
      sql_args = args[1];
    }

    connection.query(args[0], sql_args, function(err, results) {
      connection.release();
      if(err){
        console.log(err);
        return callback(err);
      }
      callback(null, results);
    });
  });
}

module.exports = { query };
