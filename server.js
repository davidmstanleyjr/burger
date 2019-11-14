// these are my dependencies
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// this is for JSON
app.use(bodyParser.json());

// this is for Handlebars.
var expressHandlebars = require("express-handlebars");

app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});