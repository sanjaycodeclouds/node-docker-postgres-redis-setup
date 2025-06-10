# Docker Compose: Postgres + Redis Setup

This project uses Docker Compose to run **PostgreSQL** and **Redis** containers for local development.

---

## 🐳 Services

- **PostgreSQL**
  - Port: `5432`
  - Username: `postgres`
  - Password: `password`
  - Database: `review`

- **Redis**
  - Port: `6379`

---


### 1. Clone the Repository

git clone https://github.com/sanjaycodeclouds/node-docker-postgres-redis-setup

cd docker-postgres-redis-setup

### 2. Run Docker Compose
docker compose up

### 3. Stopping Services
docker compose down

### 4. Remove Volumes
docker compose down -v

### 5. View logs
docker compose logs -f

### 6. Check running containers
docker ps