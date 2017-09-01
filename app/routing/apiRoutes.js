module.exports = function(app, friends){ 
    // THIS CODE SEEMS TOO WET. HOW CAN IT BE DRIED UP?
    app.get("/api/friends/:friendName?", function(req, res) {
        var friendName = req.params.friendName;
        if (friendName) {
            var index = -1;
            for (i =0; i < friends.length; i++) {
                if (friendName === friends[i].routeName) {
                    index = 1;
                    res.send(friends[i]);
                };
            };
            if (index === -1) {
                res.send("Sorry; no friend information exists at that location.")
            };
        } else {
            res.send(friends);
        }
    });
    
    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        friends.push(newFriend);
        res.json(friends);
    });
};