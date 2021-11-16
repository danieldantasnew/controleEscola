const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const rotas = require("./rotas")

server.use(express.static("public"))
server.set("view engine", "njk")
server.use(rotas)

nunjucks.configure("view",{
    express:server,
    autoescape: false,
    noCache: true
})


server.listen(5000, function(){
	console.log("server is running")
})