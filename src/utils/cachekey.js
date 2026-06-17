import env from ('../config/env')
function generateCacheKey(req){
    return `${env.REDIS_PREFIX}${req.method}:${req.originalUrl}`;
}