/* Request comes
↓
Generate Redis key
↓
Ask Redis
↓
Data found?
↓
YES → return cached data
↓
NO
↓
Continue to API  */

import cacheservice from "../services/cacheservice"
import generatecachekey from "../utils/cachekey"
import { cachekey } from '..';

async function cacheMiddleware(req,res,next){
    const cache=generatecachekey(req);
    const cachedData = await cacheservice.get(cacheKey);
    if(cachedData){
        res.set('X-cache',"Hit")
        return res.json(cachedData)
    }
    res.locals.cacheKey = cacheKey;

    res.set('X-Cache', 'MISS');

    next();module.exports = cacheMiddleware;

}