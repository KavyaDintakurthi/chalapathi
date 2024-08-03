const express = require("express"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    bodyParser = require("body-parser"),
    LocalStrategy = require("passport-local"),
    passportLocalMongoose = 
        require("passport-local-mongoose");
const Country = require("./model/Country");
let app1 = express();

mongoose.connect("mongodb://localhost/Politics");

app1.set("view engine", "ejs");
app1.use(bodyParser.urlencoded({ extended: true }));
app1.use(require("express-session")({
    secret: "Rusty is a dog",
    resave: false,
    saveUninitialized: false
}));

app1.use(passport.initialize());
app1.use(passport.session());

passport.use(new LocalStrategy(Politics.authenticate()));
passport.serializeCountry(Politics.serializeCountry());
passport.deserializePolitics(Politics.deserializeCountry());

//=====================
// ROUTES
//=====================

// Showing home page
app1.get("/", function (req, res) {
    res.render("home");
});

// Showing secret page
app1.get("/secret", isLoggedIn, function (req, res) {
    res.render("secret");
});

// Showing register formisLoggedIn
app1.get("/register", function (req, res) {
    res.render("register");
});

// Handling user signup
app1.post("/register", async (req, res) => {
    const country = await Country.create({
      cname: req.body.cname,
      cid:req.body.cid,
      cdob:req.body.cdob,
      caddress:req.body.caddress,
      password: req.body.password
    });
  
    return res.status(200).json(country);
  });

//Showing login form
app1.get("/login", function (req, res) {
    res.render("login");
});

//Handling user login
app1.post("/login", async function(req, res){
    try {
        // check if the user exists
        const country = await Country.findOne({ cname: req.body.cname });
        if (country) {
          //check if password matches
          const result = req.body.password === country.password;
          if (result) {
            res.render("secret");
          } else {
            res.status(400).json({ error: "password doesn't match" });
          }
        } else {
          res.status(400).json({ error: "User doesn't exist" });
        }
      } catch (error) {
        res.status(400).json({ error });
      }
});

//Handling user logout 
app1.get("/logout", function (req, res) {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
      });
});



function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/login");
}


app1.listen(3000, function () {
    console.log("Server Has Started!");
});