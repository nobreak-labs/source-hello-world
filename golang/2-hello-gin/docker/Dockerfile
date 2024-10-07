FROM golang:1.18 AS gobuilder
ENV CGO_ENABLED=0
COPY . /usr/src/hello/
WORKDIR /usr/src/hello
RUN go mod tidy
RUN go build -o hello-gin .

FROM scratch
COPY --from=gobuilder /usr/src/hello/hello-gin /hello-gin
CMD ["/hello-gin"]
EXPOSE 8000/tcp
