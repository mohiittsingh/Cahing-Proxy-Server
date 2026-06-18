import express from 'express';
import proxyRoutes from './routes/proxy.routes.js';
import errorMiddleware from './middleware/error.middleware.js';

const app = express();

app.use(express.json());
app.use('/', proxyRoutes);
app.use(errorMiddleware);

export default app;
