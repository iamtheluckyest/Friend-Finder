module.exports = function(app){ 
    app.get("/api/friends", function(req, res) {
        console.log("getting...");
    });
    
    app.post("/api/friends", function(req, res) {
        console.log("posting...");
    });
};

