var generateBtn = document.querySelector("#generate");
// Assignment code here

// At least 8 characters less than 128.

//lowercase"(
var lowerCase = "abcdefghijklmnopqrstuvwxyz";

//uppercase
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//numeric
var numbers = "1234567890";

//special character
var character = "!@#$%^&*-+?.";

function generatePassword () {
var possiblePassword = "" 

var promptPassword = window.prompt("How many characters would you like the password to be?");
if (promptPassword < 8 || promptPassword > 128) {
  alert("Password length must be between 8 and 128 characters")

}

var useLowercase = confirm("Do you want to use lower case characers")
if (useLowercase) {
  possiblePassword += lowerCase
console.log(possiblePassword)
}

var useUppercase = confirm("Do you want to use upper case characers")
if (useUppercase) {
  possiblePassword += upperCase
console.log(possiblePassword)
}

var useNumeric = confirm("Do you want to use numbers?")
if (useNumeric) {
  possiblePassword += numbers
console.log(possiblePassword)
}

var useSymbol = confirm("Do you want to use special characters?")
if (useSymbol) {
  possiblePassword += character
console.log(possiblePassword)
}



}
//validate
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

// When clicking generate password button open prompts with checkboxes
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
