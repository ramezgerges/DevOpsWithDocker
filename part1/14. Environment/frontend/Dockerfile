FROM ubuntu:18.04

EXPOSE 5000

WORKDIR /usr/src/app

RUN apt-get update && apt-get install curl -y

RUN curl -sL https://deb.nodesource.com/setup_16.x | bash

RUN apt install -y nodejs

RUN npm install -g serve

COPY ./example-frontend /usr/src/app

RUN npm install

ENV REACT_APP_BACKEND_URL=http://localhost:8080

RUN  npm run build

ENTRYPOINT serve -s -l 5000 build
