const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const e = require("express");


app.set("view-engine", "ejs");
//instanciação da variável de vetor para lidar com escopo.
//
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/listaDB", {useNewUrlParser: true});

const itemSchema = ({
    nome: String
});

const listSchema = ({
    nome: String,
    items: [itemSchema]
});

const List = mongoose.model("list", listSchema);

const standardInsertionDB = [{nome: "irritar o JP"}, {nome: "ser xingado pelo JP"}, {nome: "encher o saco do JP"}];

const Item = mongoose.model("item", itemSchema);



app.get("/", function (req, res) {
    Item.find(function(error, listItems){
        
        if(error){console.log(error)
            if(listItems.length === 0 ){
                Item.insertMany(standardInsertionDB, function(err){exception(err)});
            }
            res.redirect("/");
        } else{
            //mudei
            res.render("list.ejs", {
                title: "hoje",
                newlistitem: listItems
            });
            }
    });
   

})
app.post("/", function (req, res) {
    let item = new Item({
        nome: req.body.novoitem
    });
    item.save();
    res.redirect("/");
})

app.get("/about", function(req, res){
    res.render("about.ejs");
})
app.post("/delete", function(req,res){
    Item.findByIdAndRemove(req.body.check, function(error){exception(error)});
    res.redirect("/");
})

app.get("/:rota", function(req, res){
    const nome = req.params.rota
    const list = new List({
        nome: nome,
        items: standardInsertionDB
    });
    List.findOne({nome: nome}, function(error, result){
        exception(error);

        if(result){
           res.render("list.ejs", {title: result.nome, newlistitem: result.items}) 
        } else{
            list.save();
            res.redirect(`/${nome}`);
        }
    })
});

app.listen(3000, function () {
    console.log("server on na porta 3000");
})

function exception(err){
    if(err){console.log(err)} else{console.log("Sucesso!")}
}