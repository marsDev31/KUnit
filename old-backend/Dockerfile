FROM ubuntu:17.10
RUN apt-get update -y
RUN apt-get install -y python-pip python-dev build-essential python3 python3-pip python3-dev python3-scipy
COPY . /app
WORKDIR /app
RUN pip3 install -r requirements.txt
ENTRYPOINT ["python3"]
CMD ["portal.py"]

#docker build -t kunit-be .
#docker run -p 5000:5000 kunit-be
