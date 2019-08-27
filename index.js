var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handlers = {};
handlers["/"] = requestHandlers.impares;
handlers["/impares.html"] = requestHandlers.impares;

server.start(router.route, handlers);
