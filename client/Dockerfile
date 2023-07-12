FROM node:14 AS Production


WORKDIR /usr/scr/client

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

CMD ["sh", "-c", "npm start"]