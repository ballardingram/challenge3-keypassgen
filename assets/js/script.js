//Character Array for Reference
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [];
var specialCharacters = [];
var finalPassword = ""

var getpasswordLength = function () {
  var passLength = prompt("How long would you like your password?" +"\n" + "8 Character Minimum");
  return passLength;
}

var lowercase = function () {
  var lowercasePrompt = confirm("Include lower case characters?")
  return lowercasePrompt;
}

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

function generatePassword() {
  var passwordLength = getpasswordLength();
  lowercase();
  lowerCasePicker(passwordLength);
  lowerCasePicker(passwordLength);
  lowerCasePicker(passwordLength);
  lowerCasePicker(passwordLength);
  lowerCasePicker(passwordLength);
  checkFinalPassword(passwordLength);
  console.log(finalPassword);
}

var checkFinalPassword = function(num) {
if (finalPassword.length > num) {
var finalPasswordTrim = finalPassword.substring(0, parseInt(num));
finalPassword = finalPasswordTrim;
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