#Alpine image, light, secure
FROM node:11-alpine

#Image build step
RUN mkdir -p /usr/src/app

#set default working direcory
WORKDIR /usr/src/app

COPY package.json /usr/src/app/

#copy all files to image
COPY . .

#install packages
RUN npm install

#expose API for outside world
EXPOSE 3000

CMD ["node", "index.js"]