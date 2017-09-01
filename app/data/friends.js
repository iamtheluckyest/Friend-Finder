var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var htmlRoutes = require("../routing/htmlRoutes.js");
var apiRoutes = require("../routing/apiRoutes.js");

var app = express();
var PORT = process.env.PORT || 8000;

// A few default friends to start with....
var friends = [{"name":"Lucy", email: "lucy@love.com", "imgPath":"https://images.moviepilot.com/image/upload/c_fill,h_470,q_auto:good,w_620/hyhmkkgdbswvci1duiii.jpg","answers":["3","3","3","3","3","3","3","3","3","3"],"routeName":"lucy"},{"name":"Gilgamesh", email:"gilgamesh@epic.com", imgPath:"https://vignette2.wikia.nocookie.net/villains/images/a/a4/Gilgamesh_%28Statue%29.jpg/revision/latest/scale-to-width-down/300?cb=20130616201510","answers":["4","4","4","4","4","4","4","4","4","4"],"routeName":"gilgamesh"}];

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use("/assets", express.static(__dirname + '/../assets'));

// Use external files for html and api gets/posts
htmlRoutes(app);
apiRoutes(app, friends);

/*** Wish list: ***
 * User validation **/
