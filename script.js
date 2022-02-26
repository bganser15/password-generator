// // Assignment code here

// // Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

//function to ask password length
var getCriteria = function () {
  var length = window.prompt(
    "How many characters would you like the password to be? Please choose between 8 and 128 characters."
  );
  if (length < 8) {
    window.alert("Password must be atleast 8 characters.");
    //calls function to ask again
    getCriteria();
  } else if (length > 128) {
    window.alert("Password can be no greater than 128 characters.");
    //calls function to ask again
    getCriteria();
  } else if (isNaN(length)) {
    window.alert("Please input a valid answer.");
    getCriteria();
  }
  return length;
};

//asks user about uppercase, lowercase and symbols and stores them as true or false
var getUpperCase = function () {
  includeUpperCase = window.confirm("Include uppercase letters?");
  return includeUpperCase;
};

var getLowerCase = function () {
  includeLowerCase = window.confirm("Include lowercase letters?");
  return includeLowerCase;
};

var getSymbols = function () {
  includeSymbols = window.confirm("Include symbols?");
  return includeSymbols;
};
//logs "hi" as many times as password input
var randomLetters = function () {
  for (let i = 0; i < passwordCriteria.passwordLength; i++) {
    console.log("hi");
  }
};

//calls pw criteria function on button click
// var onButtonClick = function () {
//   generateBtn.addEventListener("click", getCriteria);
// };

// onButtonClick();

//creates object for parameters
var passwordCriteria = {
  passwordLength: getCriteria(),
  uppercase: getUpperCase(),
  lowercase: getLowerCase(),
  symbol: getSymbols(),
};

console.log(passwordCriteria);
randomLetters();

//on click ask user series of questions
//length 8-128 characters
//include lowercase, uppercase, numeric or special
//one must be selected
//after prompts are answered generate password in alert of screen
