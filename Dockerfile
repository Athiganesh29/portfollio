# Multi-stage build for React + Vite app served by Nginx

# 1) Build stage
FROM node:20-alpine AS builder
WORKDIR /app

# Install deps first (better layer caching)
COPY package*.json ./
RUN npm ci --no-audit --fund=false

# Copy source and build
COPY . .

# Allow overriding base path at build time
ARG VITE_BASE_PATH=/
ENV VITE_BASE_PATH=$VITE_BASE_PATH

RUN npm run build

# 2) Runtime stage (Nginx)
FROM nginx:1.27-alpine AS runner

# Copy built assets
COPY --from=builder /app/dist /usr/share/nginx/html

# Provide nginx config with SPA fallback
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


