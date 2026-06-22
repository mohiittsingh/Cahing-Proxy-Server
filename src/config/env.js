import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT || 3000,
  REDIS_HOST: process.env.REDIS_HOST || 'localhost',
  REDIS_PORT: process.env.REDIS_PORT || 6379,
  CACHE_TTL_SECONDS: Number(process.env.CACHE_TTL_SECONDS) || 300,
  REDIS_PREFIX: process.env.REDIS_PREFIX || 'proxy:cache:',
  TARGET_API: process.env.TARGET_API || '',
  PROXY_TIMEOUT_MS: Number(process.env.PROXY_TIMEOUT_MS) || 5000
};
