import * as http from 'http';
import * as debug from 'debug';

import App from './app';

debug('ts-express:server');

const port: number = 3000;

App.set('port', port)

const server = http.createServer(App);

server.listen(port);
server.on('listening', onListening);

function onListening(): void {
    let addr = server.address();
    let bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
    debug(`Listening on ${bind}`);
}