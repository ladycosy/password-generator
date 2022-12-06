//Initiaze variables
var characterLength = 10;
var passwordArray = [];
var password = "";

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

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Function to prompt user for password options - taking the input from user
function getPasswordOptions() {
  //Prompt - Password length between 10 and 64.
  passwordArray = [];
  characterLength = parseInt(
    prompt("LENGTH OF PASSWORD: Please, enter a number between 10 and 64.")
  );
  //expecting for all these conditions to be false if input correct
  if (characterLength < 10 || characterLength > 64 || isNaN(characterLength)) {
    alert("Wrong entry! Please, give a number between 10 and 64.");
    return false;
  }

  //Click OK to confirm including special, numeric, uppercase, lowercase characters
  if (confirm("Click OK to confirm including special characters.")) {
    passwordArray = passwordArray.concat(specialCharacters);
  }

  if (confirm("Click OK to confirm including numbers.")) {
    passwordArray = passwordArray.concat(numericCharacters);
  }

  if (confirm("Click OK to confirm including lower case letters.")) {
    passwordArray = passwordArray.concat(lowerCasedCharacters);
  }

  if (confirm("Click OK to confirm including upper case letters.")) {
    passwordArray = passwordArray.concat(upperCasedCharacters);
  }
  return true;
}

// Function to generate random characters
function getRandom() {
  for (var i = 0; i < characterLength; i++) {
    var randomCharacter = Math.floor(Math.random() * passwordArray.length);
    password = password + passwordArray[randomCharacter];
  }
  return password;
}

// Function to generate password based on user input
function writePassword() {
  //this will be either true or false
  var correctInput = getPasswordOptions();
  var passwordText = document.querySelector("#password");
  // Write password on the page
  if (correctInput) {
    var generatedPassword = getRandom();
    passwordText.value = generatedPassword;
  } else {
    passwordText.value = "";
  }
}

// 2. Validate the input.
