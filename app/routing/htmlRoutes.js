var path = require("path");

module.exports = function(app){ 
    app.get("/:pathName", function(req, res) {
        var pathName = req.params.pathName;
        if (pathName === "survey") {
            res.sendFile(path.join(__dirname, "/../public/survey.html"));
        } else {
            res.sendFile(path.join(__dirname, "/../public/home.html"));
        };
    });
};

