package main

import (
	"fmt"
	"net/http"
)

func main() {
    http.HandleFunc("/", HelloServer)
    http.ListenAndServe(":3000", nil)
}

func HelloServer(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "<h1> Hello world </h1>")
}

