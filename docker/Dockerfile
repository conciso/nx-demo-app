FROM node:12-alpine
ADD package.json /tmp/package.json
ADD package-lock.json /tmp/package-lock.json
RUN cd /tmp && npm install --production
RUN mkdir -p /app && cp -a /tmp/node_modules /app
COPY dist/apps/api/ /app
WORKDIR /app
USER node
EXPOSE 4444
CMD [ "node", "main.js" ]