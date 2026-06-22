import metrics from '../metrics/metrics.store.js';

function metricsMiddleware(req, res, next) {

    metrics.totalRequests++;

    next();
}

export default metricsMiddleware;