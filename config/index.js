var env = typeof process.env.NODE_ENV !== 'undefined' ? process.env.NODE_ENV : 'development';

var config = env === 'development' ?
  require('./config_dev.js'):
  require('./config_prod.js');

module.exports = config;
