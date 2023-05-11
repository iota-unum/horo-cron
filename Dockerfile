FROM node:19-alpine3.17
WORKDIR /app
COPY . .
RUN npm install
ENV API_KEY=123