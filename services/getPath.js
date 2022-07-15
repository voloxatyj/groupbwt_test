import readline from 'readline';
import { stdin as input, stdout as output } from 'process';

async function getPath() {
  const comandLine = readline.createInterface({ input, output, terminal: false });
  // Get path from terminal
  return new Promise((resolve) => {
    comandLine.question('Please, type a path\n', (path) => resolve(path));
  });
}

export default getPath;
