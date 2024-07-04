FROM node:18-alpine

WORKDIR /app

COPY package.json ./
COPY package-lock.json* ./
RUN npm install -g vite@5.3.3
RUN npm cache clean --force
RUN npm install

COPY . .

RUN npm run build

EXPOSE 4173

CMD ["vite", "preview"]