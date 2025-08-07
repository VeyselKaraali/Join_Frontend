FROM node:18 as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration production --output-hashing=all

FROM nginx:alpine
COPY --from=builder /app/dist/join-frontend/browser /usr/share/nginx/html
