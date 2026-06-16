const app = require('./app');
const redis = require('./config/redis');
const env = require('./config/env');

async function startServer() {
    try {
        await redis.connect();

        app.listen(env.PORT, () => {
            console.log(`Server running on port ${env.PORT}`);
        });

    } catch (error) {
        console.error('Failed to start application:', error);
        process.exit(1);
    }
}

startServer();