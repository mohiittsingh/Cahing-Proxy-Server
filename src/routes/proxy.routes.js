import express from 'express';
import cacheMiddleware from '../middleware/cache.middleware.js';
import proxyService from '../services/proxy.services.js';
import cacheService from '../services/cacheservice.js';
import env from '../config/env.js';

const router = express.Router();

router.get(/.*/, cacheMiddleware, async (req, res, next) => {
  try {
    const targetUrl = `${env.TARGET_API}${req.originalUrl}`;
    const data = await proxyService.fetchData(targetUrl);

    await cacheService.set(res.locals.cacheKey, data);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

export default router;
