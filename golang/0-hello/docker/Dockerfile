FROM golang:1.18 AS gobuilder
COPY . /usr/src/hello/
WORKDIR /usr/src/hello
RUN go build -o hello .

FROM scratch
COPY --from=gobuilder /usr/src/hello/hello /hello
CMD ["/hello"]
