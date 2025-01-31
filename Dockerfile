FROM node:alpine AS build
WORKDIR /opt/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine AS runtime
WORKDIR /opt/app
COPY --from=build /opt/app/build ./
COPY nginx.conf /etc/nginx/conf.d/default.conf
