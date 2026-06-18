
import app from "./app.js"
import redis from "./config/redis.js";
import env from "./config/env.js";


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