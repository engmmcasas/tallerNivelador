FROM node:16

WORKDIR /app

COPY ./package*.json ./

RUN npm install

COPY . .

CMD ["node", "./intro_cowsay/basic_server_cowsay.js"]