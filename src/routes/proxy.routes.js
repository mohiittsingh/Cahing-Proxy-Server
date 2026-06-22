import express from 'express';
import cacheMiddleware from '../middleware/cache.middleware.js';
import proxyService from '../services/proxy.services.js';
import cacheService from '../services/cacheservice.js';
import origin from '../config/origin.js';

const router = express.Router();

router.get(/.*/, cacheMiddleware, async (req, res, next) => {
  try {
    const targetUrl = `${origin.TARGET_API}${req.originalUrl}`;
    const data = await proxyService.fetchData(targetUrl);

    await cacheService.set(res.locals.cacheKey, data);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

export default router;
