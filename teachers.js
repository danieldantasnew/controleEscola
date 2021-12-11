const fs = require("fs")

exports.post = (req,res)=>{

    const keys = Object.keys(req.body)
    //validação
    for(key of keys){
        if(req.body[key] == "")
            return res.send("Por favor, preencha todos os campos")
    }

    fs.writeFile("dados.json", JSON.stringify(req.body), (err)=>{
        if(err) return res.send("Erro na escrita do arquivo")
    })
    
    return res.redirect ("/teachers")
}