// prettier-ignore
let length = "";

passwordChoices = [];

//array of choices

// prettier-ignore
uppercaseArray = ['A', 'B', 'C','D', 'E', 'F', 'G', 'H', 'I','J', 'K', 'L', 'M', 'N', 'O','P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y','Z'];
// prettier-ignore
lowercaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i','j', 'k', 'l', 'm', 'n', 'o','p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y','z'];
// prettier-ignore
symbolsArray = ['!', '?', '@', '#', '$', '%', '/', '<', '>','&', '*'];
// prettier-ignore
numbersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];

// // Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//steps to generate password, must get criteria first
//
var getPassword = function () {
  getCriteria();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

//function to generate pw after criteria is inputted
var generatePassword = function () {
  var password = "";
  for (let i = 0; i < length; i++) {
    var randomCharacters = Math.floor(Math.random() * passwordChoices.length);
    password = password + passwordChoices[randomCharacters];
  }
  return password;
};

//function to ask ppassword criteria
var getCriteria = function () {
  //resets array each time you generate password
  passwordChoices = [];

  //asks user for lenght of password and requires a valid input. calls function again if input is not valid
  length = parseInt(
    window.prompt(
      "How many characters would you like the password to be? Please choose between 8 and 128 characters."
    )
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

  //asks user about uppercase, lowercase and symbols and then concatanates strings
  if (window.confirm("Include uppercase letters?")) {
    passwordChoices = passwordChoices.concat(uppercaseArray);
  }

  if (window.confirm("Include lowercase letters?")) {
    passwordChoices = passwordChoices.concat(lowercaseArray);
  }

  if (window.confirm("Include symbols?")) {
    passwordChoices = passwordChoices.concat(symbolsArray);
  }

  if (window.confirm("Include numbers?")) {
    passwordChoices = passwordChoices.concat(numbersArray);
  }
};

// on button click, call getPassword function
generateBtn.addEventListener("click", getPassword);
//on click ask user series of questions
//length 8-128 characters
//include lowercase, uppercase, numeric or special
//one must be selected
//after prompts are answered generate password in alert of screen
