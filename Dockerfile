# Build stage
FROM node:16 AS build-env
WORKDIR /build
COPY . .
RUN yarn install --immutable
RUN yarn run build

FROM nginx:stable
COPY --from=build-env /build/public /usr/share/nginx/html/
EXPOSE 80
