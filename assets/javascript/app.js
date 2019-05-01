  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDutDWYRRTsMsvMhRH33WYDEf-v27qwLu0",
    authDomain: "myprojectiq.firebaseapp.com",
    databaseURL: "https://myprojectiq.firebaseio.com",
    projectId: "myprojectiq",
    storageBucket: "myprojectiq.appspot.com",
    messagingSenderId: "76432825283"
  };
  firebase.initializeApp(config);

var database = firebase.database();


$("#submit").on("click", function (event) {

  event.preventDefault();

  var trainName = $("#train-name").val().trim();
  var destination = $("#trainDestination").val().trim();
  var firstTrain = $("#firstTrainTime").val().trim();
  var frecuency = $("#frecuency").val().trim();

  database.ref().push({
    trainName: trainName,
    destination: destination,
    firstTrain: firstTrain,
    frecuency: frecuency
  });

});


database.ref().on("child_added", function (snapshot) {

  var sv = snapshot.val();
  // Create the new row

  console.log(sv.trainName)
  console.log(sv.destination)
  console.log(sv.firstTrain)
  console.log(sv.frecuency)

  // hours*minutes*seconds*milliseconds
/*   var oneDay = 24 * 60 * 60 * 1000;
  today = new Date();

  var monthsWorked = Math.round((Math.abs((start.getTime() - today.getTime()) / (oneDay))) / 30); */

var monthsWorked = 5000;

  var newRow = $("<tr>").append(
    $("<td>").text(sv.trainName),
    $("<td>").text(sv.destination),
    $("<td>").text(sv.frecuency),
    $("<td>").text(sv.firstTrain),
/*     $("<td>").text(monthsWorked), */
/*     $("<td>").text(monthsWorked * sv.rate)  */
  );
  // Append the new row to the table
  $("#trains tbody").append(newRow);


});


