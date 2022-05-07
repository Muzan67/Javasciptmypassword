// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// We need to store the data that we need for the program
var numbers = '0123456789'.split('')
var lowercase = 'abcdefghijklmnopqrstuvwxyz'.split('')
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
var symbol = "!@#$%^&*()".split('')
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
var hasUppercase = confirm("Do you want a lowercase letter");
// if user says yes we are going to push the data of the number array into the finalArr
//if they say no do nothing 

// use a forloop to loop through final array based of the length the user requested for 

for (let i = 0; i < lengthOfPassword; i++){
// use a MAth.random function to get a random character from the array and store it into a password string
return password
}

console.log(`length=${lengthOfPassword}  lower = ${hasLowercase}, upper = ${hasUppercase}  number = ${hasNumber}  symbol = ${hasSymbol}`);   
}   

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
element.addEventListener("click", function() {
document.getElementById("Your Secure Password").innerHTML = "";
});
