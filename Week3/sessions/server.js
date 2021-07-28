"use strict"

let express = require("express");
let request = require("request");
let bodyParser = require("body-parser");
let app = express();
let ejs = require("ejs");
const path = require("path");
let session = require("express-session");

const router = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs');
app.engine("ejs", require("ejs").__express);
app.use(session({secret: 'secret',saveUninitialized: true,resave: true}));
var sess;

router.get("/", function (req, res) {
    sess = req.session;
    res.render("index", {pagename: "Login"});
})
router.get("/profile", function (req, res) {
    sess = req.session;
    console.log(sess)
    if (typeof (sess) === "undefined" || sess.loggedIn !== true){
        var err = ["Not a authenticated user"]
        res.render("profile", {pagename: "Profile", errors: err});
    }
    else{
        res.render("profile", {pagename: "Profile", sess:sess});
    }

})

router.get("/logout", function(req, res){
    sess = req.session;
    sess.destroy(function (err){
        res.redirect("/")
    })
})

router.post('/login', function (req, res) {
    let errors = [];
    if (req.body.email === 'Mike@aol.com' && req.body.password === 'abc123') {
        sess = req.session;
        sess.loggedIn = true
        console.log(sess)
        res.render("profile", {pagename: "Profile", sess: sess});

    }

    else{
        errors.push("Password or Email is invalid");
        res.render("index", {pagename: "Login", errors: errors});
    }






})


app.use(express.static("public"))
app.use("/", router);
let server = app.listen("8080")

