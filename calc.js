console.log("hello");

const express = require('express');

const app = express();


app.get('/', function(req, res) {
    res.send("Hello")
    console.log(req);
});

app.get("/about", function(req, res){
    res.send("Ich heise Ujjawal aus India.")
})

app.get("/contact", function(req, res){
    res.send("Contact me at: guptaujjawal12@gmail.com");
});

app.get("/hobbies", function(req, res){
    res.send("<ul> <li>Spending time with Nature</li><li>Helping</li></ul>")
})

app.post("/", function(req, res) {
    res.send("Hello");
})

app.listen(3000, function () {
    console.log("Server started at port 3000");
});
