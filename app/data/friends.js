var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var htmlRoutes = require("../routing/htmlRoutes.js");
var apiRoutes = require("../routing/apiRoutes.js");

var app = express();
var PORT = 8000;

var friends = [];

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

htmlRoutes(app);
apiRoutes(app);

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use("/assets", express.static(__dirname + '/../assets'));

