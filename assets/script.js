// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button (moved to top from bottom)
generateBtn.addEventListener("click", writePassword);

//variable declarations
var userChoiceLength = "";
var userChoiceNumbers;
var userChoiceSpecChars;
var userChoiceLowerCase;
var userChoiceUpperCase;

// Password Component Arrays

var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specCharsArray = [" ", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", ",", ".", "/", ":", ";", "<", ">", "=", "?", "[", "]", "^", "_", "`", "{", "}", "|", "~"];
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseArray = [];

//converts lowercase array list into uppercase, fills empty upperCaseArray above. 
for (var i = 0; i <lowerCaseArray.length; i++) {
  upperCaseArray[i] = lowerCaseArray[i].toUpperCase()
}

// Function to generate password
function generatePassword() {
  
  var userChoiceLength = window.prompt("How many characters would you like your password to have?")

  //loop if answer to number of characters is not within bounds 8<userChoiceLength<128
  
  while(userChoiceLength < 8 || userChoiceLength > 128) {
    alert("Password length must be between 8 and 128 characters! Try again 😊")
    var userChoiceLength = window.prompt("How many characters would you like your password to have?");
  }

    var userChoiceNumbers = window.confirm("Would you like numbers in your password?")
    var userChoiceSpecChars = window.confirm("Would you like special characters in your password?")
    var userChoiceLowerCase = window.confirm("Would you like lower case letters in your password?")
    var userChoiceUpperCase = window.confirm("Would you like upper case letters in your password?")

    //loop if user declines all parameters (alert that they must choose at least one)

    while(userChoiceNumbers === false && userChoiceSpecChars === false && userChoiceLowerCase === false && userChoiceUpperCase === false) {
      alert("You must select at least one parameter to generate a password.")
      var userChoiceNumbers = window.confirm("Would you like numbers in your password?")
      var userChoiceSpecChars = window.confirm("Would you like special characters in your password?")
      var userChoiceLowerCase = window.confirm("Would you like lower case letters in your password?")
      var userChoiceUpperCase = window.confirm("Would you like upper case letters in your password?")
    }

//console logging to check that user input is being stored in the corresponding variables (which they are)
console.log(userChoiceLength)
console.log(userChoiceNumbers)
console.log(userChoiceSpecChars)
console.log(userChoiceLowerCase)
console.log(userChoiceUpperCase)


}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




