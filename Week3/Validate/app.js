"use strict"

let express = require("express");
let request = require("request");
let bodyParser = require("body-parser");
let app = express();
let ejs = require("ejs");
const path = require("path");

const router = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs');
app.engine("ejs", require("ejs").__express);
app.set('views', path.join(__dirname,'views'))


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
    if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/.test(req.body.password)) {
        errors.push("Password is invalid");

    }


    res.render("index", {pagename: "Home", errors: errors});



})
router.post('/form', function (req, res) {

    let errors = [];
    if (req.body.firstName === '') {
        errors.push("firstName is required")

    }
    if (req.body.lastName === '') {
        errors.push("lastName is required")
    }
    if ((req.body.state) === '') {
        errors.push("State is required");

    }
    if (req.body.address === '') {
        errors.push("Address is required");
    }
    if (req.body.city === '') {
        errors.push("City is required")
    }

    if (req.body.age === ''){
        errors.push("Age is required")
    }


    if (req.body.zip === '') {
        errors.push("Zip is required")
    }
    if (req.body.bio === ''){
        errors.push("Bio is required")
    }

    if (!/^[a-z ,.'-]+$/i.test(req.body.firstName)) {
        errors.push("firstname is invalid");

    }
    if (!/^[a-z ,.'-]+$/i.test(req.body.lastName)) {
        errors.push("lastName is invalid");

    }
    if (!/^(([Aa][EeLlKkSsZzRr])|([Cc][AaOoTt])|([Dd][EeCc])|([Ff][MmLl])|([Gg][AaUu])|([Hh][Ii])|([Ii][DdLlNnAa])|([Kk][SsYy])|([Ll][Aa])|([Mm][EeHhDdAaIiNnSsOoTt])|([Nn][EeVvHhJjMmYyCcDd])|([Mm][Pp])|([Oo][HhKkRr])|([Pp][WwAaRr])|([Rr][Ii])|([Ss][CcDd])|([Tt][NnXx])|([Uu][Tt])|([Vv][TtIiAa])|([Ww][AaVvIiYy]))$/.test(req.body.state)) {
        errors.push("State is invalid");

    }

    if (!/([A-Za-z]+(?: [A-Za-z]+)*),? ([A-Za-z]{2})/.test(req.body.cityName)){
        errors.push("City is invalid");
    }
    if (!/^\d{5}(?:[-\s]\d{4})?$/.test(req.body.zip)){
        errors.push("Zip is invalid");
    }

    if (errors.length === 0) {
        errors.push("Success")

    }
    res.render("form", {pagename: "Form", errors: errors});







})

app.use(express.static("public"))
app.use("/", router);
let server = app.listen("8080")

