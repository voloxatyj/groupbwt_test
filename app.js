import * as http from 'http';
import { stdout as output } from 'process';
import config from './config/config.js';
import start from './controllers/start.controller.js';

// Create Server and start listen
const { port } = config;
const server = http.createServer();
server.listen(port);

output.write(`This application create for helping bank users to cash in and/or cash out from bank account.\n 
There are also commission fees for both cash in and cash out. Only supported currency is EUR.\n`);

// get start the program
await start();
