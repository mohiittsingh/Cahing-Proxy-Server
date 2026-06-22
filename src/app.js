import express from 'express';
import proxyRoutes from './routes/proxy.routes.js';
import errorMiddleware from './middleware/error.middleware.js';
import metricsMiddleware from './middleware/metrics.middleware.js';
import statsRoutes from './routes/stats.routes.js';
import healthRoutes from './routes/health.routes.js';
import requestTimer from './middleware/requestTimer.middleware.js';

const app = express();

app.use(requestTimer);
app.use(metricsMiddleware);
app.use(healthRoutes);
app.use(statsRoutes);
app.use(express.json());
app.use('/', proxyRoutes);
app.use(errorMiddleware);

export default app;
