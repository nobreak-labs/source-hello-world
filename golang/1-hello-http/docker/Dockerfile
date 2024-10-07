FROM golang:1.18 AS gobuilder
ENV CGO_ENABLED=0
COPY . /usr/src/hello/
WORKDIR /usr/src/hello
RUN go build -o hello-http .

FROM scratch
COPY --from=gobuilder /usr/src/hello/hello-http /hello-http
CMD ["/hello-http"]
EXPOSE 3000/tcp
