<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=28&pause=1000&color=DC382D&center=true&vCenter=true&width=600&lines=⚡+Redis+Caching+API+Gateway;Stop+Hammering+Your+APIs;Cache+Once.+Serve+Forever." alt="Typing SVG" />

<br/>

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)](https://redis.io)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://docker.com)
[![Winston](https://img.shields.io/badge/Winston-Logger-brightgreen?style=for-the-badge)](https://github.com/winstonjs/winston)

<br/>

### Every millisecond costs you users. Every redundant API call costs you money.
### **CacheGate fixes both.**

<br/>

> A production-grade API Gateway that sits between your application and the outside world —
> intercepting repeated requests, serving cached responses at memory speed,
> and giving you full visibility into what's happening under the hood.

</div>

---

## 🔥 The Problem It Solves

Most applications blindly fire the same API request hundreds of times — to weather APIs, product databases, user profiles, public datasets — and pay the price every single time: **latency, rate limits, costs, and failures cascading from third-party downtime.**

CacheGate sits in front of those APIs and **absorbs the blast.**

```
WITHOUT CacheGate                    WITH CacheGate
─────────────────                    ──────────────
App ──→ API (180ms) ✓                App ──→ Gateway ──→ Redis (5ms) ✓
App ──→ API (180ms) ✓                App ──→ Gateway ──→ Redis (5ms) ✓
App ──→ API (503 ❌)                 App ──→ Gateway ──→ Redis (5ms) ✓
App ──→ API (timeout ❌)             App ──→ Gateway ──→ Redis (5ms) ✓
App ──→ API (rate limited ❌)        App ──→ Gateway ──→ Redis (5ms) ✓
```

One real network call. Everything after that — **served from memory.**

---

## 🏛 Architecture

```
                        ┌──────────────────────────────────────────┐
                        │           CacheGate Gateway               │
                        │                                          │
  Incoming Request ───▶ │  ① Log & Track    ② Check Cache         │
                        │       │                  │               │
                        │       ▼            ┌─────┴──────┐        │
                        │   📊 Metrics       │   Redis    │        │
                        │   Middleware       │   Store    │        │
                        │                   └─────┬──────┘        │
                        │                    HIT ✅│  MISS ❌       │
                        │                         │     │          │
                        │              ◀───────── ┘     ▼          │
                        │                     🌐 External API      │
                        │                         │                │
                        │                    💾 Cache + Return     │
                        └──────────────────────────────────────────┘
                                          │
                                    Response ◀────────────────────
```

Every request passes through a **layered middleware pipeline** — metrics collection, cache resolution, structured logging, and error containment — before a single byte ever reaches your upstream API.

---

## ⚡ Performance Impact

```
                     Response Time Comparison
                     ────────────────────────
  Cache MISS   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  ~180ms
  Cache HIT    ▓  ~5ms

                         ⚡ Up to 30× faster
                  📉 Upstream API calls slashed to near zero
                  💰 Third-party API costs drop with hit rate
```

> At **76%+ cache hit rate**, the average response time across your fleet collapses — without changing a single line of your application code.

---

## 🧠 What's Inside

| Layer | What It Does |
|---|---|
| ⚡ **Redis Cache Engine** | Stores API responses with configurable TTL — stale data never leaks |
| 🔑 **Smart Cache Keys** | Deterministic key generation per route + params — no accidental collisions |
| 📊 **Metrics Collector** | Tracks total requests, hits, misses, and live hit rate — always on |
| 📝 **Winston Logger** | Structured JSON logs with latency per request — grep-friendly in production |
| 🌐 **Dynamic Upstream** | Swap target APIs at runtime with `--origin` — no redeploy needed |
| ❤️ **Health Monitor** | `/health` endpoint for uptime checks, load balancers, and k8s probes |
| 🛡 **Error Boundary** | Upstream failures are caught, logged, and returned cleanly — no cascades |

---

## 🔭 Observability Built In

Real systems need answers. CacheGate exposes two endpoints so you always know what's happening:

<details>
<summary><b>❤️ GET /health</b> — Is everything alive?</summary>

```json
{
  "status": "UP",
  "redis": "connected",
  "uptime": 1234
}
```
> Ready for load balancer health checks, Kubernetes liveness probes, or uptime monitoring services.
</details>

<details>
<summary><b>📊 GET /stats</b> — Is the cache doing its job?</summary>

```json
{
  "totalRequests": 120,
  "cacheHits": 92,
  "cacheMisses": 28,
  "hitRate": "76.67%",
  "redisKeys": 15
}
```
> Watch hit rate climb in real time as your cache warms up. Know exactly when TTLs expire and traffic spikes hit.
</details>

---

## 🚀 Get Running in 3 Commands

```bash
# Install
npm install

# Launch Redis (Docker)
docker run -d --name redis-cache -p 6379:6379 redis

# Start the gateway
npm start

# Or point at any API dynamically
node src/server.js --origin=https://api.github.com
```

No configuration files to wrestle with. No environment setup ceremony. Just a working caching gateway in under a minute.

---

## 📂 Project Structure

```
src/
├── config/        ← Redis connection, environment setup
├── middleware/    ← Cache resolution, metrics, logging, error handling
├── routes/        ← Gateway route definitions and forwarding logic
├── services/      ← Upstream API fetch and response normalization
├── metrics/       ← Hit/miss counters and rate calculation
├── utils/         ← Cache key generation strategy and helpers
└── server.js      ← Entry point and middleware pipeline assembly
```

Every layer is **isolated and replaceable** — swap Redis for Memcached, swap Winston for Pino, swap Express for Fastify. The architecture holds.

---

## 🔮 Roadmap

The foundation is production-ready. Next up — features that make this enterprise-grade:

- [ ] **Route-specific TTL rules** — different expiry per endpoint, not one-size-fits-all
- [ ] **Redis-backed rate limiting** — protect upstream APIs from burst traffic
- [ ] **Stale-While-Revalidate** — serve stale cache instantly while refreshing in background
- [ ] **Docker Compose** — one command to bring up the full stack
- [ ] **Live monitoring dashboard** — visualize hit rates, latency, and cache size in real time
- [ ] **Multi-origin isolation** — separate cache namespaces per upstream API

---

<div align="center">

---

**Built as a deep dive into production backend engineering** —
not just "how to use Redis," but how real systems are designed around it.

*API Gateway Design · Caching Strategy · Middleware Pipelines · Observability · Container Networking*

</div>
