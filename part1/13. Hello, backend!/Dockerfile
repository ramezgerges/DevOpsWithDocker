FROM ubuntu:18.04

EXPOSE 8080

WORKDIR /usr/src/app

RUN apt-get update && apt-get install wget -y

RUN wget https://go.dev/dl/go1.18.1.linux-amd64.tar.gz

RUN rm -rf /usr/local/go && tar -C /usr/local -xzf go1.18.1.linux-amd64.tar.gz

ENV PATH=$PATH:/usr/local/go/bin

RUN bash $HOME/.profile

COPY ./example-backend /usr/src/app

RUN go build

ENTRYPOINT ./server
