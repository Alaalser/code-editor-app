FROM node:14.19.0-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY . ./

RUN npm install --silent

CMD [ "npm","start" ]