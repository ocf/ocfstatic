# Build stage
FROM node:18 AS build
WORKDIR /build
COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn .yarn
RUN corepack enable
RUN corepack yarn install --immutable
COPY . .
RUN corepack yarn run build

FROM nginx:stable
COPY --from=build /build/public /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
