const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');

var api = require('./api');

// ==============
// Initial Config
// ==============
const app = express();
const port = process.env.PORT || 3000;
const server = http.createServer(app);

// ====
// CORS
// ====
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

// ==========
// Middleware
// ==========
app.use(bodyParser.json()); // Support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // Support encoded bodies

// ===
// API
// ===
app.use('/api', api);

// ===================
// Production Settings
// ===================
if(app.settings.env == 'development') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

// ======
// Server
// ======
server.listen(port, () => console.log(`Listening on port ${port}`));
