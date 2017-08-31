module.exports = function(app, friends){ 
    app.get("/api/friends", function(req, res) {
        console.log("getting...");
    });
    
    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
        friends.push(newFriend);
        res.json(friends);
    });
};

