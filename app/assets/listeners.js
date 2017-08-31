$("#submit").on("click", function(){
    event.preventDefault();
    var newFriend = {
      name: $("#fullname").val().trim(),
      imgPath: $("#imgPath").val().trim(),
      answers : []
    };

    for (i = 1; i <= 10; i++) {
        newFriend.answers.push($("#question" + i).val().charAt(0))
    };

    $.post("/api/friends", newFriend)
    .done(function(data) {
      console.log(data);
    });
});