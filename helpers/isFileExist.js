import fs from 'fs';
import { stdout as output } from 'process';

export default async function isFileExist() {
  // Get path from root directory
  return new Promise((resolve, reject) => {
    const dir = process.cwd();
    fs.readdir(dir, (err, files) => {
      if (err) return reject(err);
      const file = files.find((el) => el.includes('input.json'));
      if (!file) {
        output.write('Can\'t find file. Please put input.json in root folder\n');
      }
      return resolve('Success');
    });
  });
}
