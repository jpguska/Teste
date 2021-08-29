const express = require("express");
const bodyparser = require("body-parser");
const app = express();

app.set("view-engine", "ejs");
//instanciação da variável de vetor para lidar com escopo.
let item = ["Irritar o João Pedro", "Xingar o João Pedro", "Ser xingado pelo João Pedro"];
//
app.use(bodyparser.urlencoded({extended: true}));

app.get("/", function(req, res){
    let hoje = new Date();
    let opcoes = {
        week: "long",
        day: "numeric",
        month: "long"
    };

    res.render("list.ejs", {dia: hoje.toLocaleDateString("pt-BR", opcoes), newlistitem: item});

})
app.post("/", function(req, res){
    item.push(req.body.novoitem);
    res.redirect("/");
})

app.listen(3000, function(){
    console.log("server on na porta 3000");
})
