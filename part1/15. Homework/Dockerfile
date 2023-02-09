FROM ubuntu:18.04

EXPOSE 3000

WORKDIR /usr/app/

RUN apt-get update
RUN apt-get install -y curl
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get install -y nodejs

COPY ./dataforcountries /usr/app/

RUN npm install

CMD npm start
