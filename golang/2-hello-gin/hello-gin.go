package main

import "github.com/gin-gonic/gin"

func main() {
    r := gin.Default()
    r.GET("/", func(c *gin.Context) {
        c.Data(200, "text/html; charset=utf-8", []byte("<h1>Hello World</h1>"))
    })
    r.Run(":8000")
}
