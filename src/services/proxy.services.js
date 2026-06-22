import axios from 'axios';
import env from '../config/env.js';

async function fetchData(url) {
  try {
    const response = await axios.get(url, {
      timeout: Number(env.PROXY_TIMEOUT_MS) || 5000
    });

    return response.data;
  } catch (error) {
    const upstreamError = new Error(
      `Failed to fetch upstream data from ${url}: ${error.message}`
    );

    upstreamError.statusCode =
      error.code === 'ECONNABORTED' ? 504 : 502;

    throw upstreamError;
  }
}

export default {
  fetchData
};
