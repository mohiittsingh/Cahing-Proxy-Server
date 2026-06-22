import express from 'express';
import cacheMiddleware from '../middleware/cache.middleware.js';
import proxyService from '../services/proxy.services.js';
import cacheService from '../services/cacheservice.js';
import origin from '../config/origin.js';

const router = express.Router();

router.get(/.*/, cacheMiddleware, async (req, res, next) => {
  try {
    const upstreamOrigin = origin.getOrigin();

    if (!upstreamOrigin) {
      throw new Error('TARGET_API is not configured');
    }

    const targetUrl = new URL(req.originalUrl, upstreamOrigin).toString();
    const data = await proxyService.fetchData(targetUrl);

    await cacheService.set(res.locals.cacheKey, data);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

export default router;
