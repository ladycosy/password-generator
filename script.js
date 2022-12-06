// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

//Initiaze variables
var characterLength = 10;
var choiceArr = [];

// Function to prompt user for password options - taking the input from user
function getPasswordOptions() {
  //Prompt - Password length between 10 and 64.
  characterLength = parseInt(
    prompt("LENGTH OF PASSWORD: Please, enter a number between 10 and 64.")
  );
  //expecting for all these conditions to be false
  if (characterLength < 10 || characterLength > 64 || isNaN(characterLength))
    // if not, alert as below
    alert("Wrong entry! Please, give a number between 10 and 64.");
}



// Function for getting a random element from an array
function getRandom(arr) {}

// Function to generate password with user input
function generatePassword() {}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// 4. Display password to the page.
function generatePassword() {
  console.log("Hey, you clicked the button");
  return "Congratulations! You've generated your password!";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// 1. Prompt the user for password criteria
//  A. Password length between 10 and 64.
//  B. Click OK to confirm including special, numeric, uppercase, lowercase characters.
// 2. Validate the input.
// 3. Generate password.

// Click OK to confirm including special characters.
// Click OK to confirm including numeric characters.
// Click OK to confirm including upper case characters.
// Click OK to confirm including lower case characters.
