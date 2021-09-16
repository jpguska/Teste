const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("index.html");
});

app.listen(3000, function(){
    console.log("Server rodando na porta 3000");
});