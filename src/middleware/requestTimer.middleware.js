import logger from '../config/logger.js';

export default function requestTimer(req, res, next) {

    const start = Date.now();

    res.on('finish', () => {

        const duration =
            Date.now() - start;

        logger.info(
            `${req.method} ${req.originalUrl} -> ${duration}ms`
        );
//         logger.info(
//         `Origin API ${url} responded in ${apiLatency}ms`
// );
    });

    next();
}