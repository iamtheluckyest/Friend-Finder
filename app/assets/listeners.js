// Get user's info data and store in object
$("#submit").on("click", function(){
    event.preventDefault();
    var newFriend = {
      name : $("#fullname").val().trim(),
      email : $("#email").val().trim(),
      imgPath : $("#imgPath").val().trim(),
      answers : [],
      routeName : this.name.replace(/\s+/g, "").toLowerCase()
    };

    // Add answers data to array 
    for (i = 1; i <= 10; i++) {
        newFriend.answers.push($("#question" + i).val().charAt(0))
    };

    // Send current user's data to server
    $.post("/api/friends", newFriend)
    .done(function(data) {
      console.log(data);
      // ******** Matching logic *********
      var bestMatch;
      data.forEach(function(val, i){
        // Ignore current user's own instance in the array
        if (JSON.stringify(data[i]) != JSON.stringify(newFriend)){
          var sum = 0;
          // For each friend, total the difference between his/her choices and the current user's.
          data[i].answers.forEach(function(value, j){
            sum += Math.abs(data[i].answers[j] - newFriend.answers[j])
          })
          // If a best match already exists, see if the current friend is a better match
          if (bestMatch) {
            if (sum < bestMatch.matchScore) {
              bestMatch = {
                index : i,
                matchScore : sum
              };
            };
          // If no best match exists, assign current friend as best match
          } else {
            bestMatch = {
              index : i,
              matchScore : sum
            };
          };
          // Put best match data in modal
          $('#friendName').html(data[bestMatch.index].name);
          $('#friendEmail').html(data[bestMatch.index].email);
          $('#friendImg').attr("src", data[bestMatch.index].imgPath);
          $('#myModal').modal('show')
        }
      });
    });
});