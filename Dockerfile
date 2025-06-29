FROM node:20-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json eslint.config.mjs postcss.config.mjs tsconfig.json ./
COPY next.config.ts ./
COPY src ./src
COPY public ./public

RUN npm install
RUN npm run build

FROM node:20-alpine
WORKDIR /app

COPY --from=builder /app ./
EXPOSE 3000

CMD ["npm", "start"]
