'use strict';

var Hapi = require('hapi');
var path = require('path');

var _server;
var _dirStaticPath;

function Server(options) {
	_dirStaticPath = options.dirStaticPath ? options.dirStaticPath : '/';
}

Server.prototype.listen = function(host, port, next) {
	var staticFilePath = path.resolve(__dirRootPath, _dirStaticPath)   
	console.log(__dirRootPath, _dirStaticPath, staticFilePath);
	_server = new Hapi.Server(host, port, { 
		files: { 
			relativeTo: staticFilePath,
		},
	});
	
	_server.route({ method: 'GET', path: '/app/{path*}', handler: { directory: { path: './' } } })
	// _server.route({ method: 'GET', path: '/status', handler: function(req, rep){
	// 	rep({status:'ok'});
	// }});
	if(!next){
		return this;
	}

	next(this);
};

Server.prototype.start = function(callBack) {
	_server.start(callBack);
};

Server.prototype.stop = function(options, callBack) {
	_server.stop(options, callBack);
};

Server.prototype.routes = function(routes) {
	_server.routes(routes);
};

module.exports = Server;