import axios from 'axios';

export default async function getConfigurationAPI(path) {
  try {
    const data = await axios.get(path);
    return data;
  } catch (error) {
    return error;
  }
}
