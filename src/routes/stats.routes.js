import express from 'express';
import metrics from '../metrics/metrics.store.js';

const router = express.Router();

router.get('/stats', (req, res) => {

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
            `${hitRate.toFixed(2)}%`
    });

});

export default router;