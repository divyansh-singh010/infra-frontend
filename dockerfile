FROM node:18-alpine

WORKDIR /app

COPY package.json ./
COPY package-lock.json* ./

RUN npm cache clean --force
RUN npm install

COPY . .

RUN npm run build

EXPOSE 4173

CMD ["npx", "vite", "preview"]
