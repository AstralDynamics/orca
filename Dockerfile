FROM couchdb

RUN mkdir -p /usr/src/orca
WORKDIR /usr/src/orca

RUN apt-get update -qq
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt-get install -y nodejs
RUN apt-get install -y nginx
EXPOSE 80

COPY config/local.ini /etc/couchdb/

COPY package.json /usr/src/orca
RUN npm install

COPY . /usr/src/orca
RUN npm run build

ADD build /var/www/html/

# start nginx and couchdb
