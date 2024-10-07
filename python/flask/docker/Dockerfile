FROM python:3.8
ENV FLASK_APP=hello
COPY . /usr/src/hello/
WORKDIR /usr/src/hello
RUN pip3 install -r requirements.txt
CMD ["flask", "run", "--host=0.0.0.0", "--port=5000"]
EXPOSE 5000/tcp
