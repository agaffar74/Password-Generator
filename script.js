// Array of Uppercase, Lowercase, Numeric and Special Characters to be included in password
var lowercaseCharacter = [ "a", "b", "c", "d,","e", "f", "g", "h","i", "j", "k","l" ,
          "m", "n","o","p","q","r", "s","t","u","v","w", "x", "y", "z"];

var uppercaseCharacter = ["A", "B", "C", "D", "E", "F", "G", "H","I", "J", "K", "L", 
           "M", "N", "O", "P", "Q","R","S","T", "U", "V", "W", "X", "Y", "Z"];

var numaricCharacter = ["0","1","2","3","4","5","6","7","8","9"];

var specialCharacter = ["?","!","@","#","$","%","^","&","*"]

//Retrieve a reference to the button with the id of generate
var generateBtn = document.querySelector("#generate");

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Write password to the #password input
function writePassword(){
var password = generatePassword();
var passwordText = document.querySelector("#password");

//Removing the commas  the password out of the array, after to the comma
password = password.join("");
//Putting the password on the page
passwordText.value = password; 

//write password to the #password input

var isPasswordLength = "";
//defining the length for the "if" statement.
}

function generatePassword(){
//prompt user for password length
//make sure the password length between 8-128 characters(inclusive)
var length= prompt ("Please enter the number of characters. \nBetween 10 - 64?");
//adding a return
if (length< 10 || length > 64){
  alert ("invalid length");
  return;
}
  
var getspecialCharacter   = confirm("Do you want specialCharacter to be included?");// Using a confirm prompt the user for specialCharacter characters
var getnumaricCharacter   = confirm("Do you want numaricCharacter to be included?");;// Using a confirm prompt the user for numaricCharacter characters
var getlowercaseCharacter = confirm("Do you want to be included lowercaseCharacter?");;// Using a confirm prompt the user for lowercaseCharacter characters
var getuppercaseCharacter = confirm("Do you want to be included uppercaseCharacter?");; // Using a confirm prompt the user for uppercaseCharacter characters


// Creating the strings for the query
var password= [];
// for loop for randomising inputed characters
for (let i = 0; i < length ; i++) {
  if (getspecialCharacter) {
     password.push(getRandomItem(specialCharacter));
  }
  if (getnumaricCharacter) {
    password.push(getRandomItem(numaricCharacter));
  }
  if (getlowercaseCharacter) {
     password.push(getRandomItem(lowercaseCharacter));
     }
  if (getuppercaseCharacter) {
    password.push(getRandomItem(uppercaseCharacter));
  }
 }
  console.log (password)
 //return the built password
  return password.slice(0, length);
}

// Retrieve a random item from the provided array
function getRandomItem(arr) {
// Generate a random index from 0 to the length - 1 of our array
    var randomIndex = Math.random() * arr.length;
    // round down our random index
    randomIndex = Math.floor(randomIndex);
    // return the random item based off of our random index
    return arr[randomIndex];}