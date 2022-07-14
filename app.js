import * as http from 'http';
import { stdout as output } from 'process';
import config from './config/config.js';
import start from './controllers/start.controller.js';
import parseInputData from './services/parseInputData.js';
import commission from './controllers/commission.controller.js';

// Create Server and start listen
const { port } = config;
const server = http.createServer();
server.listen(port);

// create eventlistener to close server after finishing program
process.on('SIGTERM', () => {
  server.close(() => {
    output.write('Counting commission finish successfully!');
  });
});

output.write(`This application create for helping bank users to cash in and/or cash out from bank account.\n 
There are also commission fees for both cash in and cash out. Only supported currency is EUR.\n`);

// get path from terminal
const path = await start();
// parse json file
const data = await parseInputData(path);
// starting to execute commissions on terminal
await commission(data);
