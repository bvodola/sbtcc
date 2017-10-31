var express = require('express');
var router = express.Router();
var db = require('./database');

router.get('/', (req, res) => {
  res.send('Welcome to the API.');
});

router.get('/news/*', (req, res) => {

  const params = req.params[0].split('/');
  let aditionalQuery = '';

  for(let i=0; i < params.length; i++) {
    let queryInstruction = params[i].split(':')[0];

    switch(queryInstruction) {
      case 'id':
        const id = String(params[i].split(':')[1]);
        aditionalQuery += ' AND NoticiaID='+id;
        break;

      case 'limit':
        const start = String(params[i].split(':')[1].split(',')[0]);
        const total = String(params[i].split(':')[1].split(',')[1]);
        aditionalQuery += ' LIMIT '+start+','+total;
        break;

      case 'recent':
        aditionalQuery += ' ORDER BY  `tbl_noticias`.`not_data` DESC ';
        break;
    }
  }

  db.query('SELECT * FROM  `tbl_noticias` WHERE not_status=1 AND IdiomaID=1 '+aditionalQuery, function (err, rows, fields) {
    if (err) throw err
    res.send([].concat(rows));
  })

});

module.exports = router;
