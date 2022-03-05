//  This line of code is for the "Generate Password" button.
var generateBtn = document.querySelector("#generate");

// This is my "final password options" array.
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", " u", "v", "w", "x", "y", "z"];
var specialCharacters = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/",":", ";", "<", "=", ">", "?"]

// This variable is used for the concanation of the variables thereafter.
var finalPassword = [];

// Write password to the #password input.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// This code prompts users to input code to generate a password length based on the acceptance criteria.
function generatePassword() {
  while (true) {
    var getpasswordlength = prompt("What is your desired password length?" + "\n" + "8 to 128 Characters Only");
    if (!getpasswordlength) {
      alert("Password length is required.");
    } else if (getpasswordlength < 8 || getpasswordlength > 128) {
      prompt("To use Ballard's Password Generator your password must be between 8 and 128 characters long. Try another number please.");
    } else {
      break;
    }
  }

// This code prompts users with "OK" or "Cancel" options for additional password complexity.
if (confirm("Include numbers?" + "\n" + "Example: 1-2-3")) {
  finalPassword = finalPassword.concat(numbers)
}
if (confirm("Include UPPER case letters?" + "\n" + "Example: A-B-C")){
  finalPassword = finalPassword.concat(uppercase)
}
if (confirm("Include lower case letters?" + "\n" + "Example: a-b-c")) {
  finalPassword = finalPassword.concat(lowercase)
}
if(confirm("Include special characters?" + "\n" + "Example: ! @ #")) {
  finalPassword = finalPassword.concat(specialCharacters)
}

// If the user doesn't select anything this code will provide the user an alert.
if  (finalPassword.length == 0) {
  alert("Please make a selection.");
}

// This code is an empty array that will contain the new password.
var randomPassword = [];
  
    // This next line of code is the loop requiered for the generation of the password
    for (var i = 0; i < getpasswordlength; i++) {
      var allfinalPassword = finalPassword[Math.floor(Math.random() * finalPassword.length)];
      randomPassword.push(allfinalPassword);
    }
    return randomPassword.join("");
  }

  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);