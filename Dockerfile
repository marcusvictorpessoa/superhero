
FROM node:18

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
#ENV CHOKIDAR_USEPOLLING
#ENV WATCHPACK_POLLING

COPY package.json /app/package.json
RUN npm install --silent
RUN npm install react-scripts@5.0.1 -g --silent


RUN chown -R node:node /app/node_modules

CMD ["npm", "start"]