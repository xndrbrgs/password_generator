// Assignment Code

var generateBtn = document.querySelector("#generate");

// Arrays for variables needed 

var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperCaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var specialChar = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
];

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
  
  if (confirmPrompt < 8 || confirmPrompt > 128) {
    alert("Password must contain between 8 to 128 characters! Click Generate Password!");
    
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

    if (upperCaseSelected === false && lowerCaseSelected === false && specialCharSelected === false && numSelected === false) {
      alert("Password generation requires at least one character to complete a successful password!")
    }
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
