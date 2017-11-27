FROM node:boron
RUN mkdir -p /usr/src/CcEx2
WORKDIR /usr/src/CcEx2

COPY package.json /usr/src/CcEx2
RUN npm install
COPY . /usr/src/CcEx2

EXPOSE 8080 
CMD [ "node", "clientServer.js"]
