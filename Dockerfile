FROM node:18-alpine
WORKDIR /src
COPY . .
RUN npm install
CMD ["node", "src/index.js"]
EXPOSE 3003