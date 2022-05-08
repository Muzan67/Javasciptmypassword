// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

// We need to store the data that we need for the program
var numbers = '0123456789'
var lowercase = 'abcdefghijklmnopqrstuvwxyz'
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var symbol = "!@#$%^&*()"
var finalArr = []
var password = ''
// console.log(numbers, lowercase, uppercase, symbol,)

function generatePassword () {
//get Users input
//
var lengthOfPassword = prompt("Choose length of 8-128 characters"); 

var hasNumber = confirm("Do you want a number");
// if user says yes we are going to push the data of the number array into the finalArr
//if they say no do nothing 
var hasSymbol = confirm("Do you want a special character"); 
// if user says yes we are going to push the data of the number array into the finalArr
//if they say no do nothing 
var hasLowercase = confirm("Do you want a lowercase letter"); 
// if user says yes we are going to push the data of the number array into the finalArr
//if they say no do nothing 
var hasUppercase = confirm("Do you want a uppercase letter");
// if user says yes we are going to push the data of the number array into the finalArr
//if they say no do nothing 

var arrOfSelection = []

if(hasNumber) arrOfSelection.push(numbers)
if(hasSymbol) arrOfSelection.push(symbol)
if(hasLowercase) arrOfSelection.push(lowercase)
if(hasUppercase) arrOfSelection.push(uppercase)

console.log(arrOfSelection);

// use a forloop to loop through final array based of the length the user requested for
for (let i = 0; i < lengthOfPassword; i++) { // use a MAth.random function to get a random character from the array and store it into a password string
var randCharSet = arrOfSelection[Math.floor(Math.random() * arrOfSelection.length)]
  password += randCharSet.split('')[Math.floor(Math.random() * randCharSet.length)]
  console.log(password);
}
   
return password
}

// Add event listener to generate button
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);

