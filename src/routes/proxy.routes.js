import express from "express";
const router = express.Router();
import cacheMiddleware from '../middleware/cache.middleware';
import  proxyService from '../services/proxy.service';
import cacheService from '../services/cache.service';
import env  from '../config/env';
const targetUrl =`${env.TARGET_API}${req.originalUrl}`;

router.get(
 '*',
 cacheMiddleware,
 async (req,res,next) => {

   try {

      const targetUrl =
      `${env.TARGET_API}${req.originalUrl}`;

      const data =
      await proxyService.fetchData(
          targetUrl
      );

      await cacheService.set(
          res.locals.cacheKey,
          data
      );

      res.json(data);

   } catch(error) {
      next(error);
   }
});

module.exports = router;