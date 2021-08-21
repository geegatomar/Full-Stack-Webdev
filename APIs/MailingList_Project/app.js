const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
})

app.post("/", function(req, res) {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    console.log(firstName, lastName, email);

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);
    const url = "https://us5.api.mailchimp.com/3.0/lists/1292b024e3";
    const options = {
        method: "POST",
        auth: "shivangitomar:f415fc905b7572e0b4c8f1a28aab13f7-us5"
    }
    const request = https.request(url, options, function(response){
        console.log("got response");
        console.log(response.statusCode);
        response.on("data", function(data){
            console.log(data);
            console.log(JSON.parse(data));
        })
    })

    request.write(jsonData);

    res.send("Thanks!");
})

app.listen(3000, function(){
    console.log("Listening on port 3000");
})

// f415fc905b7572e0b4c8f1a28aab13f7-us5
// 1292b024e3
