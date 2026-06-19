import cacheService from "../services/cacheservice.js";
import generateCacheKey from "../utils/cachekey.js";

export default async function cacheMiddleware(req, res, next) {
  const cacheKey = generateCacheKey(req);
  const cachedData = await cacheService.get(cacheKey);

 if (cachedData) {
    console.log(`CACHE HIT -> ${cacheKey}`);

    res.set('X-Cache', 'HIT');
    return res.json(cachedData);
}

console.log(`CACHE MISS -> ${cacheKey}`);

res.locals.cacheKey = cacheKey;
res.set('X-Cache', 'MISS');

next();
//further chnages to be done
}
