// Character options to create unique password
var numbers = "0123456789";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var symbol = "+-*/=!@#$%^&()";
var storePassword = "generate password";
var passwordLength = 0;
var password = "";
var allCharacters = "";

// create password
var createPassword = function () {
  // resets characters, password and length
  allCharacters = "";
  password = "";
  passLength = 0;

  // unique code has 8 -128 characters
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = window.prompt(
      "Choose a number between 8-128 for length of characters for your password"
    );
  }

  //get Users input to generate Password
  var numbersConfirm = window.confirm(
    "Do you want a numbers for your password? Click OK if yes"
  );
  // if user says yes we are going to push the data of the number array into the finalArr
  //if user chooses NO do nothing
  var symbolConfirm = window.confirm(
    "Do you want a special character for your password? Click OK if yes"
  );
  // if user says yes we are going to push the data of the symbol array into the finalArr
  //if user chooses NO do nothing
  var lowercaseConfirm = window.confirm(
    "Do you want a lowercase letter for your password? Click OK if yes"
  );
  // if user says yes we are going to push the data of the lowercase array into the finalArr
  //if user chooses NO do nothing
  var uppercaseConfirm = window.confirm("Do you want a uppercase letter");
  // if user says yes we are going to push the data of the uppercase array into the finalArr
  //if user chooses NO do nothing

  // confirmation of the character types the user wishes to see in their password
  if (numbersConfirm) {
    allCharacters += numbers;
  }
  if (symbolConfirm) {
    allCharacters += symbol;
  }
  if (lowercaseConfirm) {
    allCharacters += lowercase;
  }
  if (uppercaseConfirm) {
    allCharacters += uppercase;
  }

  console.log(allCharacters);
};

// use a forloop to loop through final array based off the options the users input
function generatePassword() {
  createPassword();
  for (let i = 1; i <= passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters[randomNumber];
  }
  return password;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write Password to password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
