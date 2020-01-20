
var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var routes = require("./controllers/burgers_controller.js");
var app = express();
var PORT = process.env.PORT || 3000;

//public folder
app.use(express.static("public"));

// JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//handlebars 
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));

app.set("view engine", "handlebars");

//api routes
app.use(routes);

app.listen(PORT, function () {
    console.log("Listening on Port: " + PORT);
});