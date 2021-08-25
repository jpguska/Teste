const express = require("express");

const app = express();

app.get("/", function(request, response){
    response.send("<h1>hi</h1>");
});
app.get("/contact", function(request, response){
    response.send("no");
})
app.get("/about", function(request, response){
    response.send("Im poorzilian :D Im poor................... someone take me away from this garbage..... please.....");
});

app.get("/hobbies", function(request,response){
    response.send("cry");
})

app.listen(25565, function(){
    console.log("Server iniciado na porta 25565")
});

