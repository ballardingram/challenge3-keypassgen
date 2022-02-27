//Character array for reference by the password generator.
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/",":", ";", "<", "=", ">", "?"];
var finalPassword = ""

//Prompts for users to work through before receiving their password.
var getpasswordLength = function () {
  var passLength = prompt("How long would you like your password?" +"\n" + "8 Character Minimum");
  return passLength;
}

var lowercase = function () {
  var lowercasePrompt = confirm("Include lower case characters?")
  return lowercasePrompt;
}

var uppercase = function () {
  var uppercasePrompt = confirm("Include upper case characters?")
  return uppercasePrompt;
}

var specialchar = function () {
  var specialcharPrompt = confirm("Include special characters?" + "\n" + "Example: ! @ # $ % ^ & *")
  return specialcharPrompt;
}

//Math and process code for the random generator.
var createRandomNumber = function() {
  var randomNumber = Math.floor(Math.random() * letters.length)
  return randomNumber;
}

var lowerCasePicker = function(num) {
  var fractionalNum = num / 4;
  while(fractionalNum > 0) {
    finalPassword += letters[createRandomNumber()].toLowerCase();
    fractionalNum--
  }
}

var uppercasePicker = function(num) {
  var fractionalNum = num / 4;
  while(fractionalNum > 0) {
    finalPassword += letters[createRandomNumber()].toUpperCase();
    fractionalNum--
  }
}

var specialcharPicker = function(num) {
  var fractionalNum = num / 4;
  while(fractionalNum > 0) {
    finalPassword += specialCharacters[createRandomNumber()];
    fractionalNum--
  }
}

function generatePassword() {
  var passwordLength = getpasswordLength();
  lowercase();
  lowerCasePicker(passwordLength);
  lowerCasePicker(passwordLength);
  lowerCasePicker(passwordLength);
  lowerCasePicker(passwordLength);
  lowerCasePicker(passwordLength);
  uppercase();
  uppercasePicker(passwordLength);
  uppercasePicker(passwordLength);
  uppercasePicker(passwordLength);
  uppercasePicker(passwordLength);
  uppercasePicker(passwordLength);
  specialchar();
  specialcharPicker(passwordLength);
  specialcharPicker(passwordLength);
  specialcharPicker(passwordLength);
  specialcharPicker(passwordLength);
  specialcharPicker(passwordLength);
  checkFinalPassword(passwordLength);
  console.log(finalPassword);
}

var checkFinalPassword = function(num) {
if (finalPassword.length > num) {
var finalPasswordTrim = finalPassword.substring(0, parseInt(num));
finalPassword = finalPasswordTrim;
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);