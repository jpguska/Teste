const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const mongoose = require("mongoose");


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

app.listen(3000, function () {
    console.log("server on na porta 3000");
})

function exception(err){
    if(err){console.log(err)} else{console.log("Sucesso!")}
}