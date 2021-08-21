const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

let items = ["Buy Food", "Eat Food"];

app.get("/", function(req, res){
    const today = new Date();
    const currentDay = today.getDay();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    console.log(options);
    var day = today.toLocaleDateString("en-US", options);
    res.render("list", {today: day, newItems: items}); 
})

app.post("/", function(req,res){
    items.push(req.body.newItem);
    res.redirect("/");
})

app.listen(3000, function(){
    console.log("Listening on port 3000");
})