# docker build -t kunit-fe .
# docker run -p 3000:3000 kunit-fe
FROM node:8.10.0
COPY . /app/
WORKDIR /app/
RUN npm install -g create-react-app
RUN create-react-app kunit-fe
RUN yarn add react-select
RUN npm install react-virtualized-select --save
RUN npm install react-select-fast-filter-options --save
RUN npm install react-bootstrap-table-next --save
RUN npm install bootstrap
RUN npm install axios
WORKDIR kunit-fe

COPY ./src/ ./src/

CMD npm start
