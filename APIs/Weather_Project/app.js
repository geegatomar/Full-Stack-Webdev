const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}))
const APIkey = "858c33cee5f9b5bc651cd08884115771";

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res){
    const query = req.body.city;
    console.log(query);
    
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + APIkey + "&units=metric";
    https.get(url, function(response){
        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const weatherIcon = weatherData.weather[0].icon;
            console.log(weatherIcon);
            const imageURL = "https://openweathermap.org/img/wn/" + weatherIcon + "@2x.png";

            res.write(`<h1> The temperature in Bangalore is ${temp} </h1>`);
            res.write(`The weather is currently ${weatherDescription} <br>`);
            res.write(`<img src="${imageURL}" alt="weather icon">`)
            res.send();
        })
    });
});

app.listen(3000, function(){
    console.log("Listening on port 3000");
});