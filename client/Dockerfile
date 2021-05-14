FROM node:14 as builder
WORKDIR '/app'
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run-script build

FROM nginx
EXPOSE 80
COPY ./nginx-project.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html