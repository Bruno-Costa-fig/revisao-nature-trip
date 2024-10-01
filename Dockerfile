FROM node:alpine as node

WORKDIR /app

COPY . . 

RUN npm install

RUN npm run build

FROM nginx:alpine AS final

COPY --from=node /app/dist /usr/share/nginx/html

EXPOSE 80
EXPOSE 443