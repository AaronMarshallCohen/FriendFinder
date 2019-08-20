// 4. Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.

var friends = require("../data/friends");
module.exports = function(app){

app.get("/api/friends", function (req, res) {
  res.json(friends);
})

//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
app.post("/api/friends", function (req, res) {
  // Note the code here. Our "server" will respond to a user"s survey result
  console.log(req.body)
  var newUserData = req.body;
  var newUserScores = newUserData.scores
  var newBestFriend = {
    name: "",
    photo: "",
    friendScore: Infinity
  }
//   // loop through users
//   // function within loop
// // use nested for loop
var totalDifference;
for (var i = 0; i < friends.length; i++){
  var currentFriend = friends[i];
  totalDifference = 0;
    // Then compare those results against every user in the database.
  // It will then calculate the difference between each of the numbers and the user"s numbers.
  // It will then choose the user with the least differences as the "best friend match."
  //  
  for (var j = 0; j < currentFriend.scores.length; j++){
    var currentFriendScore = currentFriend.scores[j];
    var currentUserScore = parseInt(newUserScores[j]);
    totalDifference += Math.abs(currentFriendScore - currentUserScore);
  }
  }if (totalDifference <= newBestFriend.friendScore){
    newBestFriend.name = currentFriend.name;
    newBestFriend.photo = currentFriend.photo;
    newBestFriend.friendScore = totalDifference;
 console.log(`${i}th loop.... total diff - ${totalDifference}`)
} 
  // In the case of multiple users with the same result it will choose the first match.
  // After the test, it will push the user to the database.
friends.push(newUserData);
res.json(newBestFriend);

});
}
