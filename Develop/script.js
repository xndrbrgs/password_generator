// Assignment Code

var generateBtn = document.querySelector("#generate");

// Arrays for variables needed 

var numbers = ["0123456789"];
var upperCaseChar = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lowerCaseChar = ["abcdefghijklmnopqrstuvwxyz"];
var specialChar = ["@%+/'!#$^?:,)(}{][~-_."];

var lowerCaseSelected = false;
var upperCaseSelected = false;
var specialCharSelected = false;
var numSelected = false;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  
  var confirmPrompt = prompt("How many characters would you like your password to have?");
  alert("Select OK for Yes --- Select Cancel for No");
  
  if (confirmPrompt < 8 || confirmPrompt > 128) {
    alert("Password must contain between 8 to 128 characters! Click Generate Password!");
    return "Try Again!";
  } else { 

      if (confirm("Would you like upper case letters in your password?") == true) {
        upperCaseSelected = true;
      }

      if (confirm("Would you like lower case letters in your password?") == true) {
        lowerCaseSelected = true;
      }

      if (confirm("Would you like numbers in your password?") == true) {
        numSelected = true;
      }

      if (confirm("Would you like special characters in your password?") == true) {
        specialCharSelected = true;
      }

      if (upperCaseSelected === false && lowerCaseSelected === false && 
        specialCharSelected === false && numSelected === false) {
        alert("Password generation requires at least one character type to complete a successful password!");
        return "Try Again!";
      }
  
    var newPassChars = [];

    if (upperCaseSelected === true) {
      newPassChars += upperCaseChar;
    }

    if (lowerCaseSelected === true) {
      newPassChars += lowerCaseChar;
    }

    if (numSelected === true) {
      newPassChars += numbers;
    }

    if (specialCharSelected === true) {
      newPassChars += specialChar;
    }

    var finalPass = "";

    for (var i = 0; i < confirmPrompt; i++) {
      finalPass += newPassChars[Math.floor(Math.random() * newPassChars.length)];
    }

  return finalPass;

  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
