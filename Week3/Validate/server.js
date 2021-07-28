var express = require('express');
var ejs = require('ejs');
var app = express();
app.set('view engine', 'ejs');

app.get("/", function(req, res) { // root route or home route
    res.render("index", {
        x: "Lucy Christ",
        age: 16
    });
});
app.listen(3000, function() {
    console.log("server is listening!!!");
});
