FROM python:3.8
COPY . /usr/src/hello/
WORKDIR /usr/src/hello
RUN pip3 install -r requirements.txt
CMD ["python3", "hello/manage.py", "runserver", "0.0.0.0:8000"]
EXPOSE 8000/tcp
