import redis from "../config/redis"
import env from "../config/env"

async function get(key){
return await redis.get(key);
}

async function set(key,value){
    await redis.set(
        
    )
}