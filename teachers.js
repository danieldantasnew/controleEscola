const fs = require("fs")
const dados = require("./dados.json")

exports.post = (req,res)=>{

    const keys = Object.keys(req.body)
    //validação
    for(key of keys){
        if(req.body[key] == "")
            return res.send("Por favor, preencha todos os campos")
    }

    let{novo_avatar, nome_professor, nascimento, selecionar, aula} = req.body

    nascimento = Date.parse(nascimento)
    const criado_em = Date.now()
    const id = Number(dados.teachers.length + 1)
    dados.teachers.push({
        id,
        novo_avatar,
        nome_professor,
        nascimento,
        selecionar,
        aula,
        criado_em
    })

    fs.writeFile("dados.json", JSON.stringify(dados, null, 2), (err)=>{
        if(err) return res.send("Erro na escrita do arquivo")
    })
    
    return res.redirect ("/teachers")
}