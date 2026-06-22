import express from 'express';
import redis from '../config/redis.js';

const router = express.Router();

router.get('/health', async (req, res) => {

    let redisStatus = 'disconnected';

    try {
        const response = await redis.ping();

        if (response === 'PONG') {
            redisStatus = 'connected';
        }

    } catch (error) {
        redisStatus = 'disconnected';
    }

    res.status(200).json({
        status: 'UP',
        redis: redisStatus,
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
    });

});

export default router;