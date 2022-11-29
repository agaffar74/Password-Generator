// Assignment code here
// Array of Uppercase, Lowercase, Numeric and Special Characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
    

// Function to capture the proper password length or continue to prompt
function getPasswordOptions() {
	lengthValue = prompt("Choose Your Password Length. \nBetween: 10 - 64");
	// prompt cannot be empty, be less than 8, more than 128 and cannot contain text
	while (lengthValue === "" || parseInt(lengthValue) < 10 || parseInt(lengthValue) > 64 || isNaN(parseInt(lengthValue))) {
		lengthValue = prompt("Choose Your Password Length. \nBetween: 10 - 64");
	}
	console.log("Password length: " + lengthValue);
	return lengthValue;
}

function generatePassword() {
  
  selectPassCharacters = [];
  randomPassword = "";

	var lengthofPassword = getPasswordOptions(); // Length of Password Requestd
	var lowerCase        = confirm("Include Lowercase Characters?"); // Include Lowercase Letters?
	var upperCase        = confirm("Include Uppercase Characters?"); // Include Uppercase Letters?
	var numbers          = confirm("Include Numbers?"); // Include Numbers?
  var special          = confirm("Include Special Characters?"); // Include Special Characters?
  
  // If no character options are selected, alert message and begin again.
  if (lowerCase === false && upperCase === false && numbers === false && special === false) {
    alert("Please select at least one password criteria.");
    generatePassword();
  }
  else { // Build password characters string per requirements.
    
    
    if (lowerCase == true) {
      selectPassCharacters = selectPassCharacters.concat(lowercaseCharacters);
    }
    if (upperCase == true) {
      selectPassCharacters += selectPassCharacters.concat(uppercaseCharacters);
    }
    if (numbers == true) {
      selectPassCharacters += selectPassCharacters.concat(numericCharacters);
    }
    if (special == true) {
      selectPassCharacters += selectPassCharacters.concat(specialCharacters);
    }
  }
  
  //Building the password
  for (var i = 0; i < lengthofPassword; i++) 
      randomPassword += selectPassCharacters[Math.floor(Math.random() * selectPassCharacters.length)];
  
	return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if (password){
    passwordText.value = password;
  } else {
    passwordText.value = '';
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);