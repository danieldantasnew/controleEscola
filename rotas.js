const express = require('express')
const rotas = express.Router()


rotas.get("/", (req,res)=>{
    return res.redirect("/teachers")
})

rotas.get("/teachers", (req,res)=>{
    return res.render("teachers/index")
})

rotas.get("/students", (req,res)=>{
    return res.render("students")
    //a pagina view está configurado em nunjucks.configure("view") lá no servidor então não preciso dizer qual o caminho pois ele irá buscar primeiramente lá
})

module.exports = rotas