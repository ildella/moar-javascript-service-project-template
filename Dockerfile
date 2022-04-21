FROM node:16-alpine

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn.lock ./

RUN yarn install --production --frozen-lockfile

# Bundle app source
COPY . .

EXPOSE 5001
CMD [ "yarn", "start.http" ]
# CMD [ "yarn", "start.nest" ]
