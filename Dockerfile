FROM node:20-alpine


WORKDIR /app

COPY package*.json ./

RUN npm config set registry http://13.202.80.56:8081/repository/npm-group/

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]