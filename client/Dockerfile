FROM node:latest

WORKDIR /client
COPY package.json .

RUN npm i
COPY . .

RUN apt-get update
RUN npm install

EXPOSE 8081

RUN npm run build
CMD npm run serve