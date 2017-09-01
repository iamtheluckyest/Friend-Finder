var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var htmlRoutes = require("../routing/htmlRoutes.js");
var apiRoutes = require("../routing/apiRoutes.js");

var app = express();
var PORT = 8000;

var friends = [{"name":"Sam","imgPath":"samimage","answers":["3","3","3","3","3","3","3","3","3","3"],"routeName":"sam"},{"name":"Hannah","imgPath":"hannahimg","answers":["4","4","4","4","4","4","4","4","4","4"],"routeName":"hannah"}, {"name":"James","imgPath":"jamesimg","answers":["1","1","1","1","1","1","1","1","1","1"],"routeName":"james"}];

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use("/assets", express.static(__dirname + '/../assets'));

htmlRoutes(app);
apiRoutes(app, friends);
