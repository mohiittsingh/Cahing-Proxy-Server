
import { createClient } from "redis";

const redis = createClient({
  url: `redis://${env.REDIS_HOST}:${env.REDIS_HOST}` || 'redis://localhost:6379',
});

redis.on('error', (err) => console.error('Redis error:', err));
redis.on('connect',()=>{
    console.log(`redis connecting.....`);
    
})
redis.on('ready',()=>{
console.log('Redis ready');
})

redis.on('end',()=>{
    console.log('Redis connection closed');
})

module.exports = redis;