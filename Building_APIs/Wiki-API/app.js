const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.urlencoded({extended : true}));
app.set('view engine', 'ejs');
app.use(express.static("public"));

mongoose.connect('mongodb://localhost:27017/wikiDB', {useNewUrlParser: true, useUnifiedTopology: true});

const articleSchema = mongoose.Schema({
    title: String,
    content: String
});

const Article = mongoose.model("Article", articleSchema);

// 1. Reads/Fetches all articles (like Read of CRUD in databases).
app.get("/articles", function(req, res){
    Article.find(function(err, foundArticles){
        if (err) {
            res.send(err);
        } else {
            res.send(foundArticles);
        }
    });
});

// 2. Posts/Creates all articles (like Create of CRUD in databases).
app.post("/articles", function(req, res){
    console.log(req.body.title, req.body.content);
    const newArticle = new Article({
        title: req.body.title,
        content: req.body.content
    });

    newArticle.save(function(err){
        if (!err) {
            res.send("Successfully added a new article.");
        } else {
            res.send(err);
        }
    });
});

// 3. Delete all articles (like D of CRUD).
app.delete("/articles", function(req, res){
    Article.deleteMany(function(err) {
        if (!err) {
            res.send("Successfully deleted all articles");
        } else {
            res.send(err);
        }
    });
});

app.listen(3000, function(){
    console.log("Listening on port 3000");
});

