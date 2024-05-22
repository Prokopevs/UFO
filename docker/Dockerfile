FROM node:20.13-alpine3.18 AS builder

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
COPY tsconfig.json ./
COPY yarn.lock ./

RUN yarn add node-sass
RUN yarn install

COPY public public
COPY src src
COPY nginx nginx
COPY .env .env

RUN yarn run build

FROM nginx:stable-alpine
# Copying built assets from builders
COPY --from=builder /app/build /usr/share/nginx/html
# Copying our nginx.conf
COPY --from=builder /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
