const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ejs = require("ejs");
const bodyParser = require("body-parser");

app.set("view-engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));
//coneção com o banco de dados
mongoose.connect("mongodb://localhost:27017/wikiDB");

//instanciação de esquema, modelo, e teste

const articleSchema = {
    title: String,
    content: String
}

const Article = mongoose.model("articles", articleSchema);

/*const teste = new Article({
    title: "teste",
    content: "teste"
})*/

//rotas

app.route("/articles")
.get(function(req, res){
    Article.find(function(error, result){
        if(error){console.log(error)} else{
            res.send(result);
        }
    });
}).post(function(req, res){
    let title = req.body.title;
    let content = req.body.content;

    let newArticle = new Article({
        title: title,
        content: content
    });
    newArticle.save(function(error){if(error){console.log(error)}});
}).delete(function(req, res){
    Article.deleteMany(function(err){
        if(err){
            console.log(err);
        }else {
            res.send("Deletado tudo.");
        }
    } );
})

app.route("/articles/:articleTitle")
.get(function(req, res){
    Article.findOne({title: req.params.articleTitle}, function(err, found){
        if(err){
            console.log(err);
        } else if(found){
            res.send(found);
        } else{
            res.send("Não foi encontrado nada.");
        }
    })
}).put(function(req, res){
    Article.findOneAndUpdate({
        title: req.params.articleTitle
    },{
        title: req.body.title,
        content: req.body.content
    },{overwrite: true}, function(err, result){
        if(err){
            res.send(`erro! ${err}`);
        }else{
            res.send(`Sucesso! ${result}`);
        }
    } )
}).patch(function(req, res){
    Article.findOneAndUpdate({
        title: req.params.articleTitle
    }, {
        $set: req.body
    }, function(err){
        if(err){
            res.send(err);
        } else {
            res.send("Dados inseridos!");
        }
    })
}).delete(function(req, res){
    Article.findOneAndDelete({
        title: req.params.articleTitle
    },function(error, result){
        if(error){
            res.send(error);
        } else{
            res.send(result);
        }
    });
});

app.listen(3000, function(){
    console.log("Server conectado na porta 3000");
})

