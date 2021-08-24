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
    response.sendFile(`${__dirname}/html/BMIcalc.html`)
});

app.post("/bmicalculator", function(request, response){
    response.send(`Seu BMI é de: ${Number(request.body.weight) / (Number(request.body.height) * Number(request.body.height))}`)
});

app.get("/traitcalculator", function(request, response){
    response.sendFile(`${__dirname}/html/traitcalc.html`);
});

app.post("/traitcalculator", function(request, response){
    //HERE COMES DA LOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOONG BOAH
    let collection = calculate(Number(request.body.head))
    response.send(`Head: ${Number(request.body.head).toFixed(2)}cm <br> Eye: ${collection[0].toFixed(2)}cm <br> Nose: ${collection[1].toFixed(2)}cm <br> Lips: ${collection[2].toFixed(2)}cm <br> Chin: ${collection[3].toFixed(2)}cm <br> Eye partition: ${(Number(request.body.eye) / 3).toFixed(2)}cm`);

})

app.listen(3000, function(){
    console.log("Server online na porta: 3000");
})




//functions

function calculate(number){
    let col = []
    col.push(number / 2);//eye
    col.push((number / 2)/2);//nose
    col.push(((number / 2)/2)/2);//lips
    col.push(((((number/ 2)/2)/2)/2)); //chin
    return col;
}