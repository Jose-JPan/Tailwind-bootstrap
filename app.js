const express = require ('express')
const connectLiveReload = require("connect-livereload");

const app = express()
app.use(connectLiveReload());
// const path = require('path');

const livereload = require("livereload");
var liveReloadServer = livereload.createServer({extraExts:'ejs'});
liveReloadServer.watch([__dirname+'/views',__dirname+'/public']);



app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// This lines gotta be removed
// app.get ('/', (req, res) => res.render("land"));
// app.get ('/merda', (req, res) => res.render("merda"));

// Requiring routes
var indexRoutes = require("./routes/index");


app.use("/", indexRoutes);

app.listen (3000, () => console.log('server ready'))
