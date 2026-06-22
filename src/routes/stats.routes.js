import express from 'express';
import metrics from '../metrics/metrics.store.js';
import redis from '../config/redis.js';

const router = express.Router();


router.get('/stats', async (req, res) => {
   const keys =
    await redis.keys('proxy:cache:*');

    const hitRate =
        metrics.totalRequests === 0
        ? 0
        : (
            metrics.cacheHits /
            metrics.totalRequests
          ) * 100;

    res.json({
        totalRequests:
            metrics.totalRequests,

        cacheHits:
            metrics.cacheHits,

        cacheMisses:
            metrics.cacheMisses,

        hitRate:
            `${hitRate.toFixed(2)}%`,
            
        redisKeys:
        keys.length
            


            
    });

});

export default router;