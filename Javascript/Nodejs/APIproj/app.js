const express = require("express");
const app = express();
const https = require("https");




app.get("/", function(req, res){
    const url = "https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=ecfee4a6c281059d4b07be78bc5f87db";
    https.get(url, function(response){
        console.log(response);
    });
    res.send("hi");
})



app.listen(3000, function(){
    console.log("Server ligado na porta 3000. Acesse localhost:3000/ para acessar o servidor.");
});