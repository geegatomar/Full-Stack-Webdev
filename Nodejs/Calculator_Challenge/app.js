const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res) {
    let sum = Number(req.body.num1) + Number(req.body.num2);
    res.send("Sum is " + sum);
});

app.listen(3000, function(){
    console.log("Listening on port 3000");
})