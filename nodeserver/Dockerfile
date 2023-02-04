FROM node:latest
WORKDIR /usr/src/nodeapp
COPY package.json ./
RUN npm install --no-cache-dir -r
COPY . .
CMD npm run start