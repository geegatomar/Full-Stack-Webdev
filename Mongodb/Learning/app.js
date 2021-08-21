const express = require("express");
const mongoose = require("mongoose");

const app = express();
mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true, useUnifiedTopology: true });

// Create schema
const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

// Create model
// By doing this, you will have created a new collection called 'Fruits'
// (mongoose makes a pluralized version of it).
const Fruit = mongoose.model("Fruit", fruitSchema);

// Now creating new fruit document
const fruit = new Fruit({
    name: "Apple",
    rating: 8,
    review: "Juicy, good fruit"
});

// Saving this document fruit to our DB.
// fruit.save();

const personSchema = mongoose.Schema({
    name: String,
    age: Number
});

// Here the name of the collection is 'Men'.
const Person = mongoose.model("Man", personSchema);

const john = new Person({
    name: "John",
    age: 30
})

john.save();

app.listen(3000, function(req, res){
    console.log("listening on port 3000");
});