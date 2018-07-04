"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const debug = require("debug");
const app_1 = require("./app");
debug('ts-express:server');
const port = 3000;
app_1.default.set('port', port);
const server = http.createServer(app_1.default);
server.listen(port);
server.on('listening', onListening);
function onListening() {
    let addr = server.address();
    let bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
    debug(`Listening on ${bind}`);
}
