"use strict"

let express = require("express");
let request = require("request");
let bodyParser = require("body-parser");
let app = express();
let ejs = require("ejs");
const router = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs');
app.engine("ejs", require("ejs").__express);


router.get("/", function (req, res) {
    res.render("index", {pagename: "Home"});
})


router.get("/about", function (req, res) {
    res.render("about", {pagename: "About"});
})
router.get("/form", function (req, res) {
    res.render("form", {pagename: "Form"});
})
router.post('/post', function (req, res) {

    console.log(req.body.email);
    console.log(req.body.password);
    let errors = [];
    if (req.body.email === '') {
        errors.push("Email is required")

    }
    if (req.body.password === '') {
        errors.push("Password is required")
    }

    if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        .test(req.body.email)) {
        errors.push("Email is invalid");

    }
    if (!/^(?=.*\d).{4,8}$/.test(req.body.password)) {
        errors.push("Password is invalid");

    }
    console.log(errors);


    res.render("index", {pagename: "Home", errors: errors});


})


app.use(express.static("public"))
app.use("/", router);
let server = app.listen("8080")

