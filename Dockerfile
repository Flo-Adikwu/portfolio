ARG INSTALL=install

#
# build
#
FROM node:alpine AS build
WORKDIR /opt/app
ARG INSTALL
COPY package.json package-lock.json ./
RUN npm $INSTALL
COPY . .
RUN npm run build

#
# runtime
#
FROM nginx:alpine AS runtime
WORKDIR /opt/app
COPY --from=build /opt/app/build ./
COPY nginx.conf /etc/nginx/conf.d/default.conf
