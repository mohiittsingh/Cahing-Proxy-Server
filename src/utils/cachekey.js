import env from '../config/env.js';

function generateCacheKey(req) {
  return `${env.REDIS_PREFIX}${req.method}:${req.originalUrl}`;
}

export default generateCacheKey;
