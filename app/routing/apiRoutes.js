module.exports = function(app, friends){ 
    app.get("/api/friends/:friendName?", function(req, res) {
        var friendName = req.params.friendName;
        if (friendName){
            for (i =0; i < friends.length; i++) {
                if (friendName === friends[i].routeName) {
                    res.json(friends[i]);
                    break;
                }
                else {
                    res.send("Sorry; no friend information exists at that location.")
                }
            }
        } else {
            res.json(friends);
        }
    });
    
    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
        friends.push(newFriend);
        res.json(friends);
    });
};

