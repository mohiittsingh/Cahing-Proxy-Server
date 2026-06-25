# 🚀 Redis-Powered Caching API Gateway

A high-performance API Gateway built with Node.js, Express, and Redis that reduces repeated external API calls through intelligent response caching, TTL-based expiration, request monitoring, and health checks.

## ✨ Features

* ⚡ Redis-powered response caching
* ⏳ Configurable TTL (Time-To-Live)
* 📊 Cache hit/miss metrics
* ❤️ Health monitoring endpoint
* 📝 Structured logging with Winston
* 📈 Request latency tracking
* 🌐 Dynamic upstream API support
* 🔄 Cache key generation strategy
* 🛡 Error handling middleware
* 🐳 Dockerized Redis setup

---

## 🏗 Architecture

```text
Client
  │
  ▼
Express API Gateway
  │
  ├── Metrics Middleware
  ├── Cache Middleware
  ├── Logging Middleware
  ├── Health Checks
  │
  ▼
Redis Cache
  │
  ▼
External API
(JSONPlaceholder, DummyJSON, GitHub API, etc.)
```

---

## ⚡ Performance

Example benchmark:

| Request Type | Response Time |
| ------------ | ------------- |
| Cache Miss   | ~180ms        |
| Cache Hit    | ~5ms          |

> Achieved up to 30x faster response times through Redis caching.

---

## 📊 Observability

### Health Endpoint

```http
GET /health
```

Response:

```json
{
  "status": "UP",
  "redis": "connected",
  "uptime": 1234
}
```

### Metrics Endpoint

```http
GET /stats
```

Response:

```json
{
  "totalRequests": 120,
  "cacheHits": 92,
  "cacheMisses": 28,
  "hitRate": "76.67%",
  "redisKeys": 15
}
```

---

## 🛠 Tech Stack

* Node.js
* Express.js
* Redis
* Docker
* Winston
* Axios
* Dotenv

---

## 🚀 Getting Started

### Install Dependencies

```bash
npm install
```

### Start Redis

```bash
docker run -d \
--name redis-cache \
-p 6379:6379 \
redis
```

### Run Application

```bash
npm start
```

### Run With Custom Origin

```bash
node src/server.js --origin=https://dummyjson.com
```

---

## 📂 Project Structure

```text
src
├── config
├── middleware
├── routes
├── services
├── metrics
├── utils
└── server.js
```

---

## 🎯 Learning Outcomes

This project demonstrates:

* API Gateway Design
* Redis Caching Strategies
* Middleware Architecture
* Observability & Monitoring
* Request Lifecycle Management
* Production Logging
* Error Handling Patterns
* Docker Fundamentals

---

## 🔮 Upcoming Features

* Route-specific cache invalidation
* Rate limiting with Redis
* Stale-While-Revalidate caching
* Docker Compose support
* Monitoring dashboard
* Multi-origin cache isolation

---

Built to explore production-grade backend engineering concepts using Node.js and Redis.
