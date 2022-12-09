FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn.lock ./

RUN yarn install --production --frozen-lockfile

COPY . .

EXPOSE 5010
CMD [ "yarn", "start.http" ]
