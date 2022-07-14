import * as fs from 'fs';

// Parse json file from path
async function parseInputData(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(`${path}`, (err, data) => {
      if (err) return reject(err);
      return resolve(JSON.parse(Buffer.from(data)));
    });
  });
}

export default parseInputData;
