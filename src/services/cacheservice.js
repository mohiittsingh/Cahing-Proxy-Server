import redis from "../config/redis.js";
import env from "../config/env.js";

async function get(key) {
  const data = await redis.get(key);
  return data ? JSON.parse(data) : null;
}

async function set(key, value) {
  await redis.set(key, JSON.stringify(value), {
    EX: env.CACHE_TTL_SECONDS
  });
}

async function remove(key) {
  await redis.del(key);
}

async function clearProxyCache() {
  const keys = await redis.keys(`${env.REDIS_PREFIX}*`);

  if (keys.length > 0) {
    await redis.del(...keys);
  }
}

export default {
  get,
  set,
  remove,
  clearProxyCache
};
