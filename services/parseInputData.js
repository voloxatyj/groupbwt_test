import { error } from 'console';
import * as fs from 'fs';
import config from '../config/config.js';

// Parse json file from path
export default async function parseInputData() {
  const { path } = config;
  return new Promise((resolve, reject) => {
    fs.readFile(`${path}`, (err, data) => {
      if (err) return reject(err.code);
      return resolve(JSON.parse(Buffer.from(data)));
    });
  });
}
