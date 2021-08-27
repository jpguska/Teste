const express = require("express");
const app = express();
const https = require("https");




app.get("/", function(req, res){
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Brasilia&id=524901&appid=ecfee4a6c281059d4b07be78bc5f87db";
    https.get(url, function(response){
        console.log(response.statusCode);
       response.on("data", function(data){
           const localweather = JSON.parse(data);
           const icon = `https://openweathermap.org/img/wn/${localweather.weather[0].icon}@2x.png`; //localweather.weather[0].icon
           res.write(`Temp: ${MedidaDeSerHumano(Number(localweather.main.temp))} <br>`);
           res.write(`${localweather.weather[0].description}<br>`);
           res.write(`<img src="https://openweathermap.org/img/wn/${localweather.weather[0].icon}@2x.png"> <br>`);
           res.send();
       }) 
    });
})



app.listen(3000, function(){
    console.log("Server ligado na porta 3000. Acesse localhost:3000/ para acessar o servidor.");
});

function MedidaDeSerHumano(Fatreich){
    return ((Fatreich - 32) / 1.8).toFixed(2);
}