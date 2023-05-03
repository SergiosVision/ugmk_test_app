FROM node:18.6 AS builder

WORKDIR /app
COPY . /app
RUN yarn install
RUN yarn build

# Bundle static assets with nginx
FROM nginx:stable-alpine as production
# Copy built assets from builder
COPY --from=builder /app/dist /usr/share/nginx/html
# Add your nginx.conf
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]
