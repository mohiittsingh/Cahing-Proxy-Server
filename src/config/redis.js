import { createClient } from 'redis';
import env from './env.js';

const redis = createClient({
  url: `redis://${env.REDIS_HOST}:${env.REDIS_PORT}`
});

redis.on('error', (err) => console.error('Redis error:', err));
redis.on('connect', () => {
  console.log('Redis connecting.....');
});
redis.on('ready', () => {
  console.log('Redis ready');
});
redis.on('end', () => {
  console.log('Redis connection closed');
  
});

export default redis;
