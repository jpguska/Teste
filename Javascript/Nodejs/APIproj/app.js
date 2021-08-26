const express = require("express");
const app = express();
const https = require("https");




app.get("/", function(req, res){
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Brasilia&id=524901&appid=ecfee4a6c281059d4b07be78bc5f87db";
    https.get(url, function(response){
        console.log(response.statusCode);
       response.on("data", function(data){
           const localweather = JSON.parse(data);
           res.send(`<h1>${MedidaDeSerHumano(localweather.main.temp)}Cº</h1> <br> ${localweather.weather[0].description}`);
       }) 
    });
})



app.listen(3000, function(){
    console.log("Server ligado na porta 3000. Acesse localhost:3000/ para acessar o servidor.");
});

function MedidaDeSerHumano(Fatreich){
    return ((Fatreich - 32) / 1.8).toFixed(2);
}