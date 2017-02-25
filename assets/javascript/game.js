// this is the javacript file for the crystal game
//number generated at the begining of each round by the machine between 12-120 - this is a function or a process that I want the computer run over and over. Write the function in javascript and call it in jQuery - although in terms of syntax the jQuery goes before the javascript
(document).ready(function(){
var machineTotal = Math.floor(Math.random()*101 + 19);
console.log(machineTotal);
});

//appending the machine total # so I can use it in html through an id - appending is a jQuery thing
$('#targetScore').text(machineTotal);
console.log(machineTotal);

//the sum of the selected/clicked button and the current totalScore - not sure about this pseudocode - i think that the variable should be set to the begining state of totalScore, so that I can write a function with this variable.  How do I best distinguish the difference between these things at this state of writing?
//jQuery goes first

var totalScore = 0;

//===when machineTotal === totalScore - same question here - how do I know that the variable needs to be defined as its starting state.  At this point, because I've been thinking about it so long, I know that I'm going to use this variable as a way to add and record (maybe thats it - the place where it gets recorded, variables are the place where changing #'s get stored??')
var wins = 0;

// ===when total Score is > machineTotal - same question here
var losses = 0;

//jQuery needs the variables to be called, looks similar to appending code above
$('#numberWins').text(wins);
$('#numberLosses').text(losses);
console.log(wins);
console.log(losses);


//buttons script included in start game function
function start () {
	(document).ready(function(){
	var machineTotal = Math.floor(Math.random()*101 + 19);
	console.log(machineTotal);
	//appanding it to an id that I'm defining so html can use it
	$('#targetScore').text(machineTotal);
	console.log(machineTotal);
	//button that generates (and hides behind an image) random # between 1 - 12
	var crystalButton1 = Math.floor(Math.random()*11+1);
	//button that generates (and hides behind an image) and random # between 1 - 12
	var crystalButton2 = Math.floor(Math.random()*11+1);
	//button that generates (and hides behind an image) and random # between 1 - 12
	var crystalButton3 = Math.floor(Math.random()*11+1);
	//button that generates (and hides behind an image) and random # between 1 - 12
	var crystalButton4 = Math.floor(Math.random()*11+1);
	//returning the total score to 0
	var totalScore = 0;
	$('#userScoreCounter').text(totalScore);
});
//when the the totalScore is equal to the machineTotal, then this function will be called
function success() {
	$('#numberWins').text(wins);
	console.log('Cool!');
	//adding 1 to to win counter
	wins++;
	//start function being called by the success function
	start();
}

//same as success function but losses variable gets added to
function fail() {
	$('#numberLosses').text(losses);
	console.log("Sorry Charlie - try Again!");
	losses++;
	//start game function is being called
	start();

}

//getting the buttons to work.  append each variable with jQuery so html can use it. Give each button an onclick function so it will activate when the user clicks on the image, then define the function you want the machine to perform - which is adding the image # with the total score #.
$('#buttonOne').click(function() {
	totalScore = totalScore + crystalButton1;
	console.log(totalScore + crystalButton1);
});
		  $('#finalTotal').text(totalScore); 
          //win operation
        if (totalScore == machineTotal){
          success();
        }
        //lose operation
        else if (totalScore > machineTotal){
          fail();
        
}
        //repeat for 3 other buttons

$('#buttonTwo').click(function() {
	totalScore = totalScore + crystalButton2;
	console.log(totalScore + crystalButton2);
		  $('#finalTotal').text(totalScore); 
          //win operation
        if (totalScore == machineTotal){
          success();
        }
        //lose operation
        else if (totalScore > machineTotal){
          fail();
        }

$('#buttonThree').click(function() {
	totalScore = totalScore + crystalButton3;
	console.log(totalScore + crystalButton3);
		  $('#finalTotal').text(totalScore); 
          //win operation
        if (totalScore == machineTotal){
          success();
        }
        //lose operation
        else if (totalScore > machineTotal){
          fail();
        }

$('#buttonFour').click(function() {
	totalScore = totalScore + crystalButton4;
	console.log(totalScore + crystalButton4);
	
		  $('#finalTotal').text(totalScore); 
          //win operation
        if (totalScore == machineTotal){
          success();
        }
        //lose operation
        else if (totalScore > machineTotal){
          fail();
        }


