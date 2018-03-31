# docker build -t kunit-fe .
# docker run -p 3000:3000 kunit-fe
FROM node:8.10.0
COPY . /app/
WORKDIR /app/
RUN npm install -g create-react-app
RUN create-react-app kunit
WORKDIR kunit
COPY ./src/ ./src/

CMD npm start
