FROM node:15-alpine
WORKDIR /usr/app
COPY . .
RUN yarn install
EXPOSE 3000
ENTRYPOINT ["node", "index.js"]