FROM node:22

LABEL authors="matheus.candido"

RUN mkdir /app

WORKDIR /app

COPY . /app

RUN ls

RUN npm install -g @angular/cli

RUN npm install



CMD ["ng", "serve", "--host", "0.0.0.0", "--build-target", "frontend:build:production", "--disable-host-check"]