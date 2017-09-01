module.exports = function(app, friends){ 
    // THIS CODE SEEMS TOO WET. HOW CAN IT BE DRIED UP?
    app.get("/api/friends/:friendName?", function(req, res) {
        // Determine the desired information from the URL
        var friendName = req.params.friendName;
        // If there is a friendName in the path, check that it is in the array
        if (friendName) {
            var index = -1;
            for (i =0; i < friends.length; i++) {
                if (friendName === friends[i].routeName) {
                    index = 1;
                    res.send(friends[i]);
                };
            };
            // If there is no friendName in the path, inform the user.
            if (index === -1) {
                res.send("Sorry; no friend information exists at that location.")
            };
        } else {
            res.send(friends);
        }
    });
    
    // Add new friend data to friends array; then return array to client
    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        friends.push(newFriend);
        res.json(friends);
    });
};