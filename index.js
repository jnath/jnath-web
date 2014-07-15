'use strict';


global.__dirRootPath = __dirname;

var Server = require('./lib/server');

var server = new Server({
	dirStaticPath: './app'
});

var port = process.env.PORT || 3000;
var host = process.env.HOST || '0.0.0.0';

server.listen(host, port);
server.start(function(){
	console.log('server start on : ' + host + ':' +port);
});