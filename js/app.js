//create global variables
var secNum = 0
var userData = 0
var arrayUserData = [];
var difference = 0
var hotCold
var count = 0

$(document).ready(function(){	

 //calls function to get random number
    getNumber();

	/*--- Display information modal box ---*/
  	$("a.what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});
  

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});




 $("form").on("submit", function(event) {
      //prevents the default action from happening?
        event.preventDefault();
      //get entry from user input
          userData = $("#userGuess").val();
         //calls function to validate userdata
         getValidateData();
         //calls function to add data to the array
         getPushAppend();
         //calls function to check if the user number and random number are close and 
         //gives feedback to the user
         checkFeedback();
       })
 //function for getting the random number
  function getNumber() {
  //var  secNum = 0;
secNum = Math.floor((Math.random() * 100) + 1);
//alert(" random number " + secNum);
// difference = Math.abs(userData - secNum);//alert(difference);
}
//function to validate users data to make sure it is modular, not less than 1 and not
//more than 100
 function getValidateData(){
   //validates the user input 
 //takes users input and puts it into and integer 
  userData = parseInt(userData);
 if (userData % 1 != 0 || userData < 1 || userData > 100 ){
  alert("please enter a number between 1-100");
 }
  if (count !== 0 && arrayUserData.length > 0) {
    //function to check each piece of the array against the user entry so it knows that
    // they have already used that number
  $.each(arrayUserData, function(guess, value){
    if(userData == value){
      alert("already used that number");
    }
  });
}
}
 //function to take user data and put it in the array
 function getPushAppend() {
   arrayUserData.push(userData);
      //    alert(arrayUserData);
//enters the user input and puts it on the html page in a list
         $("#guessList").append("<li>" + userData +"</li><br>");
   //counts the times the user has tried to guess
    count++; 
        //puts the count on the html page in the h2 tags
 $("#count").html(count);
 }

 
 //function to  give the user feedback on how close their guess is
 function checkFeedback() {
//takes the math and gets rid of the minus
 difference = Math.abs(userData - secNum);
 //alert("The difference between these numbers is: " + difference);

 //checks to see if the user is close or far from guessing the answer 
 //and puts it on the html page 
 if (difference == 0) {
 // hotCold = "HotHotHot, you Win!!!"
     $("#feedback").html("HotHotHot, you win!!!")   
    } else if (difference <= 20) {
      //hotCold = "Hot"
      $("#feedback").html("Hot");
    } else if (difference <= 40){
    //  hotCold = "warmer"
    $("#feedback").html("warmer");
    } else if (difference <= 60){
    //  hotCold = "cool"
    $("#feedback").html("cool");
    } else if (difference <= 80){
    //  hotCold = "cold"
      $("#feedback").html("cold");
    } else {
    //  hotCold = "Ice Cold brrrr"
      $("#feedback").html("Ice Cold brrrrr");
    }
   $("#userGuess").val(" ");

}
//function for a new game, clears html values  and array and calls get new random number
$(".new").click(function() {
   $("#feedback").html("Make your Guess!");
   $("#userGuess").val("Enter your Guess");
   $("#guessList").html(" ");
   $("#count").html(" ");
  
  // $("h2").html(" ");  
$("ul").html(" ");
arrayUserData = [];
secNum = 0;
getNumber();
});

});
/*--FIRST YOU ENTER A NUMBER IN THE INPUT TAG USERGUESS
THEN YOU CLICK THE BUTTON $("form").("submit", function(e){ e.preventDefault(); })
// /*---calls function newGame to start new game and calls function getUserGuess---*/
// newGame();
// /*---form.submit(function(event){
// 	event.preventDefault();---*/
// 	GetUserGuess();

// };
// newButton.click(newGame);

// function newGame(){
// 	form.find('input[type=submit]').css('opacity','1');
// 	getSecretNumber();
// alert("test");
// }




// function getSecretNumber() {
//  secNum = Math.floor((Math.random() * 100) + 1);

// }
// function getUserGuess(){
// 	 userGuess = input.val();
// 	 input.val('');
// 	 input.focus();
// 	 if(userGuess % 1 !== 0 || userGuess < 0 || userGuess > 100)
// }
// 	
//  userGuess = (parseInt(userGuess));
//     if (isNaN(userGuess) || userGuess % 1 != 0 || userGuess > 100 || userGuess < 1) {
//     	$ alert("You entered " + userGuess + " You must enter a valid number from 1-100 to continue...");
//     }

// }
// function howClose() {
// 	if (secNum - userGuess >= 50 ){
// 		$ userFeedback == "very cold";
// 	}
// 	$userFeedback == "??";
// }
// function placeInfo() {
// 	feedback.html(userFeedback);
//}
