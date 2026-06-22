
import app from "./app.js"
import redis from "./config/redis.js";
import env from "./config/env.js";
console.log("TARGET_API =", env.TARGET_API);
import origin from './config/origin.js';

console.log(
  "Origin:",
  origin.getOrigin()
);
console.log(
 `Active Origin: ${origin.getOrigin()}`
);
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