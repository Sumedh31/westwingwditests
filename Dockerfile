FROM node:14
ADD . /app
WORKDIR /app

RUN apt-get -qqy update
RUN apt-get -qqy install \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common

RUN curl -sS -o - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -

RUN echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list

RUN apt-get -qqy update

RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -

RUN apt-get -qqy --no-install-recommends install \
  google-chrome-stable

RUN npm i --save-dev @wdio/cli
RUN npm i --save-dev @wdio/local-runner
RUN npm i --save-dev @wdio/mocha-framework
RUN npm i --save-dev @wdio/spec-reporter
RUN npm i --save-dev @wdio/sync
RUN npm i --save-dev chromedriver
RUN npm i --save-dev wdio-chromedriver-service

RUN google-chrome --version
RUN node --version
RUN npm --version
