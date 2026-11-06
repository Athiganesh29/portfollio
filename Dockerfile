# ---- Build stage ----
FROM node:22-alpine AS build

WORKDIR /app

# Install dependencies inside the Linux container (gets correct native binaries)
COPY package*.json ./
RUN npm install

# Copy the rest of the source and build the static site
COPY . .
ARG VITE_BASE_PATH=/
ENV VITE_BASE_PATH=$VITE_BASE_PATH
RUN npm run build

# ---- Serve stage ----
FROM nginx:alpine

# SPA-friendly nginx config (serves /usr/share/nginx/html on port 80)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built static files from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
