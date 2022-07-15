import https from 'https';

async function getConfigurationAPI(path) {
  const res = await new Promise((resolve) => {
    https.get(path, resolve);
  });

  const response = await new Promise((resolve, reject) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('error', (err) => reject(err));
    res.on('end', () => resolve(data));
  });

  return JSON.parse(response);
}

export default getConfigurationAPI;
