// import axios from 'axios';
// import env from '../config/env.js';
// import logger from '../config/logger.js';

// async function fetchData(url) {
  
//   try {
//     const response = await axios.get(url, {
//       timeout: Number(env.PROXY_TIMEOUT_MS) || 5000
//     });
//     const latency = Date.now() - startTime;

//     logger.info(
//       `Origin API ${url} responded in ${latency}ms`
//     );



//     return response.data;
//   } catch (error) {
//     const upstreamError = new Error(
//       `Failed to fetch upstream data from ${url}: ${error.message}`
//     );

//     upstreamError.statusCode =
//       error.code === 'ECONNABORTED' ? 504 : 502;

//     throw upstreamError;
//   }
// }

// export default {
//   fetchData
// };



import axios from 'axios';
import env from '../config/env.js';
import logger from '../config/logger.js';

async function fetchData(url) {

  const startTime = Date.now();

  try {

    const response = await axios.get(url, {
      timeout: Number(env.PROXY_TIMEOUT_MS) || 5000
    });

    const latency =
      Date.now() - startTime;

    logger.info(
      `Origin API ${url} responded in ${latency}ms`
    );

    return response.data;

  } catch (error) {

    const latency =
      Date.now() - startTime;

    logger.error(
      `Origin API ${url} failed after ${latency}ms`
    );

    const upstreamError = new Error(
      `Failed to fetch upstream data from ${url}: ${error.message}`
    );

    upstreamError.statusCode =
      error.code === 'ECONNABORTED'
        ? 504
        : 502;

    throw upstreamError;
  }
}

export default {
  fetchData
};