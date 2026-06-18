import express from "express";
const router = express.Router();
import cacheMiddleware from '../middleware/cache.middleware';
import  proxyService from '../services/proxy.service';
import cacheService from '../services/cache.service';

router.get(
    '/users',
    cacheMiddleware,
    async (req, res) => {

        const data =
        await proxyService.fetchData(
            'https://jsonplaceholder.typicode.com/users'
        );

        const cacheKey =
        res.locals.cacheKey;

        await cacheService.set(
            cacheKey,
            data
        );

        return res.json(data);
    }
);

module.exports = router;