var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var htmlRoutes = require("../routing/htmlRoutes.js");
var apiRoutes = require("../routing/apiRoutes.js");

var app = express();
var PORT = 8000;

var friends = [{"name":"Sam","imgPath":"https://cdn.pixabay.com/photo/2016/05/18/20/44/squirrel-1401509_960_720.jpg","answers":["3","3","3","3","3","3","3","3","3","3"],"routeName":"sam"},{"name":"Hannah","imgPath":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_C82KnktLi68lO4rXsHFi7A915kjWt2hsKpCw2hpR6DBPte8JLQ","answers":["4","4","4","4","4","4","4","4","4","4"],"routeName":"hannah"}, {"name":"James","imgPath":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjp-OIXNC050e2KQgvd8XDbf5um6Jg0us98-YvGowKeLdwBc3Ixg","answers":["1","1","1","1","1","1","1","1","1","1"],"routeName":"james"}];

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

/*** Wish list: ***
 * User validation
