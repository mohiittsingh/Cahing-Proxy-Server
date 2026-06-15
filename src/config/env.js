require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 3000,

    REDIS_HOST: process.env.REDIS_HOST,

    REDIS_PORT: process.env.REDIS_PORT,

    CACHE_TTL_SECONDS:
        Number(process.env.CACHE_TTL_SECONDS) || 300,

    REDIS_PREFIX:
        process.env.REDIS_PREFIX || 'proxy:cache:'
};