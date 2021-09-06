const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/amigosDB", {useNewUrlParser: true});

//Schemas
const pessoaSchema = new mongoose.Schema({
    nome: String,
    idade: Number
});

const amiguinhosSchema = new mongoose.Schema({
    nome: {type: String,
        required: [true, "???????? conheço esse ai n"]
    },
    rating:{ type: Number,
        min: 0,
        max: 10
    },
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
    rating: 10,
    note: "O mais fofo"
});
const amigo1 = new Amigo({
    nome: "Enrico",
    rating: 0,
    note: "Um merda"
});





//finalização :)

Amigo.updateOne({_id: "61341e4b5b15176c65809eaf"}, {nome: "Vevis"}, function(err){if(err){console.log(err)}else{console.log("Sucesso.")}});

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
/*Amigo.find(function(err, amigos){
    if(err){
        console.log(err);
    } else{
        mongoose.connection.close();
        amigos.forEach(function(amiguinho){
            console.log(amiguinho.nome);
        });
    }
})*/
//JP odeia seus amigos!!!!


Pessoa.deleteMany({nome: "Johns"}, function(error){callbackError(error)});

Amigo.find(function(error, amigos){
    if(error){console.log(error)} else{
        amigos.forEach(function(amigo){
            console.log(`Nome: ${amigo.nome} Nota: ${amigo.note}`);
        })
    }
})
//O FLight é da Bahia
function callbackError(error){
    if(error){console.log(error)}else{console.log("Sucesso!")}
}