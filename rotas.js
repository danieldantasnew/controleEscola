const express = require('express')
const rotas = express.Router()


rotas.get("/", (req,res)=>{
    res.redirect("/teachers")
})

rotas.get("/teachers", (req,res)=>{
    return res.render("teachers/index")
})

rotas.get("/teachers/create", (req, res)=>{
    return res.render("teachers/create")
})

rotas.post("/teachers", (req,res)=>{
    return res.send ("Recebido")
})

rotas.get("/students", (req,res)=>{
    return res.render("students")
    //a pagina view está configurado em nunjucks.configure("view") lá no servidor então não preciso dizer qual o caminho pois ele irá buscar primeiramente lá
})

module.exports = rotas