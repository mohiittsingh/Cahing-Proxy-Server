import axios from 'axios';

async function fetchData(url) {
  const response = await axios.get(url);
  return response.data;
}

export default {
  fetchData
};
