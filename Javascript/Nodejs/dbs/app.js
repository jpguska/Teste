const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/amigosDB", {useNewUrlParser: true});

//Schemas
const pessoaSchema = new mongoose.Schema({
    nome: String,
    idade: Number
});

const amiguinhosSchema = new mongoose.Schema({
    nome: String,
    rating: Number,
    note: String
});
//models
const Amigo = mongoose.model("amigos", amiguinhosSchema);
const Pessoa = mongoose.model("pessoas", pessoaSchema);
//constantes para coleção
const pessoa = new Pessoa({
    nome: "Johns",
    idade: 20
});
const amigo = new Amigo({
    nome: "Leocineos",
    rating: 100,
    note: "O mais fofo"
});
const amigo1 = new Amigo({
    nome: "Enrico",
    rating: 0,
    note: "Um merda"
});



//finalização :)
/*Amigo.insertMany([amigo, amigo1], function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Sucesso, salvo as vitimas do Jonjes...");
    }
})*/
//experimento social do jonjes
//pessoa.save();

//recuperação de dados
Amigo.find(function(err, amigos){
    if(err){
        console.log(err);
    } else{
        mongoose.connection.close();
        amigos.forEach(function(amiguinho){
            console.log(amiguinho.nome);
        });
    }
})
