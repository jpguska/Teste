const express = require("express");
const app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({extended: true}));

app.get("/calculator", function(request, response){
    response.sendFile(`${__dirname}/html/calc.html`);
});

app.post("/calculator", function(request, response){
    response.send(`aqui está seu resultado meu bom ${Number(request.body.num1) + Number(request.body.num2)}`);
});

app.get("/bmicalculator", function(request, response){
    response.sendFile(`${__dirname}/html/BMIcalculator.html`)
})

app.listen(3000, function(){
    console.log("Server online na porta: 3000");
})