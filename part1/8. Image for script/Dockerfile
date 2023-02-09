FROM ubuntu:20.04

WORKDIR /usr/src/app

RUN apt-get update && apt-get install curl -y

COPY ./search.sh .

RUN chmod +x ./search.sh

CMD ./search.sh
