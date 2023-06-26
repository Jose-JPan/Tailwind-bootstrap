var express = require("express");
var route = express.Router();


//Root Route
route.get("/", (req, res) => 
    res.render("landing"));
        
module.exports = route;