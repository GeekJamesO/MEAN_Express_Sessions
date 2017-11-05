const express = require("express");
const app = express();
const bp = require("body-parser");
const path = require("path");
const session = require("express-session");
const port = "8000";
app.use(express.static(path.join(__dirname, "/static"))); //will be client when we use angular
//app.use(bp.json());  //or bp.urlencoded("?") //Will change later. 
app.use(bp.urlencoded({extended: true}));
app.use(session({ secret: "SomethingHere" }));

app.set('views', path.join(__dirname, '/views'));  //until we have angular
app.set('view engine', 'ejs');  //until we have angular 
require('./config/routes')(app);

var fs = require("fs");
//var http = require("http");

app.listen(port, function() {
	  console.log(`We are listening on port ${port}`);
});
