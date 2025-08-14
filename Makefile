# WhatsApp Bot - Development Commands

# Default target
.DEFAULT_GOAL := help

# Variables
COMPOSE_FILE := docker-compose.yml
COMPOSE_DEV_FILE := docker-compose.dev.yml

help: ## Show this help message
	@echo "WhatsApp Bot - Available Commands:"
	@echo ""
	@awk 'BEGIN {FS = ":.*##"} /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 }' $(MAKEFILE_LIST)

# Development commands
dev: ## Start development environment with hot reload
	@echo "🚀 Starting development environment..."
	docker-compose -f $(COMPOSE_FILE) --profile dev up --build

dev-detached: ## Start development environment in background
	@echo "🚀 Starting development environment (detached)..."
	docker-compose -f $(COMPOSE_FILE) --profile dev up -d --build

# Production commands
up: ## Start production environment
	@echo "🚀 Starting production environment..."
	docker-compose up -d --build

down: ## Stop all services
	@echo "🛑 Stopping all services..."
	docker-compose down

restart: ## Restart all services
	@echo "🔄 Restarting services..."
	docker-compose restart

# Database commands
db-migrate: ## Run database migrations
	@echo "📊 Running database migrations..."
	docker-compose exec server npm run prisma:migrate

db-seed: ## Seed database with initial data
	@echo "🌱 Seeding database..."
	docker-compose exec server npm run prisma:seed

db-reset: ## Reset database (careful!)
	@echo "⚠️  Resetting database..."
	docker-compose exec server npm run prisma:reset

# Utility commands
logs: ## Show logs from all services
	docker-compose logs -f

logs-server: ## Show logs from server only
	docker-compose logs -f server

logs-web: ## Show logs from web only
	docker-compose logs -f web

shell-server: ## Open shell in server container
	docker-compose exec server sh

shell-web: ## Open shell in web container
	docker-compose exec web sh

# Build commands
build: ## Build all images
	@echo "🔨 Building images..."
	docker-compose build

build-server: ## Build server image only
	docker-compose build server

build-web: ## Build web image only
	docker-compose build web

# Cleanup commands
clean: ## Remove containers, networks, and volumes
	@echo "🧹 Cleaning up..."
	docker-compose down -v --remove-orphans
	docker system prune -f

clean-all: ## Remove everything including images
	@echo "🧹 Deep cleaning..."
	docker-compose down -v --remove-orphans --rmi all
	docker system prune -af

# Testing commands
test: ## Run tests
	@echo "🧪 Running tests..."
	docker-compose exec server npm test

test-coverage: ## Run tests with coverage
	@echo "🧪 Running tests with coverage..."
	docker-compose exec server npm run test:coverage

# Production deployment
deploy: ## Deploy to production (requires .env.production)
	@echo "🚀 Deploying to production..."
	docker-compose -f $(COMPOSE_FILE) -f docker-compose.prod.yml up -d --build

# Health checks
health: ## Check service health
	@echo "❤️  Checking service health..."
	@curl -f http://localhost:3001/health || echo "❌ Server health check failed"
	@curl -f http://localhost:3000 || echo "❌ Web health check failed"

# Setup commands
setup: ## Initial setup (copy env, install deps)
	@echo "⚙️  Setting up project..."
	@if [ ! -f .env ]; then cp .env.example .env; echo "📋 Created .env file from template"; fi
	@echo "✅ Setup complete! Edit .env file with your credentials"

# Status
status: ## Show service status
	@echo "📊 Service Status:"
	docker-compose ps

.PHONY: help dev dev-detached up down restart db-migrate db-seed db-reset logs logs-server logs-web shell-server shell-web build build-server build-web clean clean-all test test-coverage deploy health setup status