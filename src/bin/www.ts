#!/usr/bin/env node

/**
 * Module dependencies.
 */

import app from '../app';
var http = require('http');
var https = require('https');
var fs = require('fs');

var mongoose = require('mongoose');

// config should be imported before importing any other file

// // make bluebird default Promise
// Promise = require('bluebird'); // eslint-disable-line no-global-assign

// // plugin bluebird promise in mongoose
// mongoose.Promise = Promise;

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '8083');
var appId = process.env.APPID || 'wxa6bac7ec18f19732';
var appSecret = process.env.APPSECRET || '9df9e27221bc1e4683912409bbca9940';
app.set('port', port);
app.set('appId', appId);
app.set('appSecret', appSecret);

// connect to mongo db
const mongoUri = process.env.MONGOURI || 'mongodb://cephei:cephei-2018@ds213612.mlab.com:13612/heroku_96p9gt12';
mongoose.connect(mongoUri, { server: { socketOptions: { keepAlive: 1 } } });
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoUri}`);
}).on('connected', () => {
  console.log('Mongodb connected');
});

// print mongoose logs in dev env
if (process.env.MONGOOSE_DEBUG) {
  mongoose.set('debug', (collectionName: any, method: any, query: any, doc: any) => {
    //debug(`${collectionName}.${method}`, util.inspect(query, false, 20), doc);
  });
}

/**
 * Create HTTP server.
 */
var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);


var options = {
  key: fs.readFileSync('/etc/letsencrypt/live/gdjzj.hzsdgames.com/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/gdjzj.hzsdgames.com/fullchain.pem')
};
var sslServer = https.createServer(options, app);
sslServer.listen(`8084`);
sslServer.on('error', onError);
sslServer.on('listening', onListening);


/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val: string) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error: any) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  //debug('Listening on ' + bind);
}
