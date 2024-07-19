FROM node:20-alpine AS builder

ENV APP_HOME /eicc
WORKDIR "$APP_HOME"

COPY . ./
RUN npm install -g pnpm --registry=https://registry.npmmirror.com
RUN npm install --registry=https://registry.npmmirror.com
RUN npm run build:docker

FROM node:20-alpine

COPY --from=builder /eicc/.output /app/eicc/.output

WORKDIR /app/eicc

EXPOSE 3000

ENV ENV=docker
CMD ["node", "./.output/server/index.mjs"]