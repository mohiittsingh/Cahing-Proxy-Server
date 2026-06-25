<div align="center">

# ⚡ Caching-Proxy-Gateway!

### A Redis-Powered API Gateway for High-Performance Caching

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)](https://redis.io)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://docker.com)

> **30× faster responses** through intelligent Redis response caching, TTL expiration, and full observability.

</div>

---

## 🏗 How It Works

```
  Client Request
       │
       ▼
┌─────────────────────────────────┐
│         Express Gateway         │
│                                 │
│  📊 Metrics → 🗂 Cache Check    │
│       │              │          │
│       │         Cache HIT ✅    │
│       │              │          │
│  Cache MISS ❌        │          │
│       │              │          │
│       ▼              │          │
│  🌐 External API     │          │
│       │              │          │
│  💾 Store in Redis   │          │
└───────┼──────────────┼──────────┘
        └──────┬───────┘
               ▼
         Response (~5ms)
```

---

## ✨ Features at a Glance

| Feature | Description |
|---|---|
| ⚡ **Redis Caching** | Lightning-fast response storage with configurable TTL |
| 📊 **Hit/Miss Metrics** | Real-time cache performance stats via `/stats` |
| ❤️ **Health Checks** | Live service status via `/health` |
| 📝 **Winston Logging** | Structured, production-grade request logging |
| 🌐 **Dynamic Origins** | Point the gateway at any upstream API at runtime |
| 🛡 **Error Middleware** | Graceful failure handling throughout the request lifecycle |

---

## 📈 Performance

```
Cache Miss  ████████████████████  ~180ms
Cache Hit   █  ~5ms
```

> Up to **30× faster** on repeated requests — Redis serves cached responses before your upstream even gets pinged.

---

## 🔭 Observability

<details>
<summary><b>GET /health</b> — Service liveness</summary>

```json
{
  "status": "UP",
  "redis": "connected",
  "uptime": 1234
}
```
</details>

<details>
<summary><b>GET /stats</b> — Cache performance metrics</summary>

```json
{
  "totalRequests": 120,
  "cacheHits": 92,
  "cacheMisses": 28,
  "hitRate": "76.67%",
  "redisKeys": 15
}
```
</details>

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Spin up Redis via Docker
docker run -d --name redis-cache -p 6379:6379 redis

# 3. Start the gateway
npm start

# Optional: point at a custom upstream origin
node src/server.js --origin=https://dummyjson.com
```

---

## 📂 Project Structure

```
src/
├── config/          # Environment & Redis config
├── middleware/       # Cache, metrics, logging, error handling
├── routes/          # Gateway route definitions
├── services/        # Upstream API call logic
├── metrics/         # Hit/miss counters
├── utils/           # Cache key generation & helpers
└── server.js        # Entry point
```

---

## 🔮 Coming Soon

- [ ] Route-specific cache invalidation
- [ ] Rate limiting with Redis
- [ ] Stale-While-Revalidate strategy
- [ ] Docker Compose support
- [ ] Live monitoring dashboard
- [ ] Multi-origin cache isolation

---

<div align="center">

Built to explore **production-grade backend engineering** with Node.js and Redis.

*API Gateway Design · Redis Caching · Middleware Architecture · Observability · Docker*

</div>
