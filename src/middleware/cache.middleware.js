import cacheService from "../services/cacheservice.js";
import generateCacheKey from "../utils/cachekey.js";
import metrics from '../metrics/metrics.store.js';
import logger from '../config/logger.js';

export default async function cacheMiddleware(req, res, next) {
  const cacheKey = generateCacheKey(req);
  const cachedData = await cacheService.get(cacheKey);

  if (cachedData) {
    metrics.cacheHits++;
    // console.log(`CACHE HIT -> ${cacheKey}`);
    logger.info(`CACHE HIT -> ${cacheKey}`);

    res.set('X-Cache', 'HIT');
    return res.json(cachedData);
  }

  metrics.cacheMisses++;
  // console.log(`CACHE MISS -> ${cacheKey}`);
  logger.info(`CACHE MISS-> ${cacheKey}`);

  res.locals.cacheKey = cacheKey;
  res.set('X-Cache', 'MISS');
  next();
}
