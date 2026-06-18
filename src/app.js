import express from 'express'
import  proxyRoutes from './routes/proxy.routes';
import errorMiddleware  from './middleware/error.middleware';
app.use(errorMiddleware);
app.use('/', proxyRoutes);
const app=express()
app.use(express.json());
module.exports = app;