import redis from "../config/redis"
import env from "../config/env"

async function get(key) {

    const data =
    await redis.get(key);

    return data
        ? JSON.parse(data)
        : null;
}

async function set(key,value){
    await redis.set(
        key,
        JSON.stringify(value),
        {
            EX:env.CACHE_TTL_SECONDS
        }
    )
}
 async function remove(key){
    await redis.del(key);
 }
  async function clearproxycache () {
    const key= await redis.keys(
        `${env.REDIS_PREFIX}*`
    );

    if (keys.length > 0) {
        await redis.del(keys);
    }
  }

  module.exports = {
    get,
    set,
    remove,
    clearProxyCache
};