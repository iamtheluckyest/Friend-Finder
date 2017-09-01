$("#submit").on("click", function(){
    event.preventDefault();
    var newFriend = {
      name: $("#fullname").val().trim(),
      imgPath: $("#imgPath").val().trim(),
      answers : [],
      routeName : this.name.replace(/\s+/g, "").toLowerCase()
    };

    for (i = 1; i <= 10; i++) {
        newFriend.answers.push($("#question" + i).val().charAt(0))
    };

    $.post("/api/friends", newFriend)
    .done(function(data) {
      console.log(data);
      // Matching algorithm
      var bestMatch;
      data.forEach(function(val, i){
        // IS IT OKAY TO HAVE AN "IGNORE" CLAUSE LIKE THIS?
        if (JSON.stringify(data[i]) === JSON.stringify(newFriend)){
        } else {
          var sum = 0;
          data[i].answers.forEach(function(value, j){
            sum += Math.abs(data[i].answers[j] - newFriend.answers[j])
          })
          if (bestMatch) {
            if (sum < bestMatch.matchScore) {
              bestMatch = {
                index : i,
                matchScore : sum
              };
            };
          } else {
            bestMatch = {
              index : i,
              matchScore : sum
            };
          };
          console.log("bestMatch is: " + data[bestMatch.index].name)
          console.log(bestMatch);
        }
      });
    });
});