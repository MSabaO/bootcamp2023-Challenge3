// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordLength;
var confirmLower;
var confirmUpper;
var confirmNum;
var confirmSpec;
var userChoices;
var passwordBlank;
var password;
var allChoices;

// lower case letters
var lowerCase = [
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
  "ñ",
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
// upper case
var upperCase = [
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
  "Ñ",
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

// special caracters
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  "<",
];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Function
function generatePassword() {
  passwordLength = prompt(
    "How long would you link your password to be? Write in the box a number between 8 and 128"
  );
  console.log("Length? " + passwordLength);

  if (!passwordLength) {
    alert("Length is required, please start again and provide number");
  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Password length must be between 8 and 128");
    console.log("Lenght? " + passwordLength);
  } else {
    confirmSpec = confirm("Would you like it to have special characters?");
    console.log("Special Characters? " + confirmSpec);
    confirmNum = confirm("Would you like this to have numbers?");
    console.log("Numbers?" + confirmNum);
    confirmLower = confirm("Woudl you like it to have lower case letters?");
    console.log("Lower case?");
    confirmUpper = confirm("Would you like it to have upper case letters?");
  }

  //Without response
  if (!confirmSpec && confirmNum && confirmLower && confirmUpper) {
    userChoices = alert("A criteria is required");
    //four choices selected scenario
  } else if (confirmSpec && confirmNum && confirmLower && confirmUpper) {
    userChoices = lowerCase.concat(special, numbers, upperCase);
    console.log(userChoices);
  }
  //three choices selected scenario
  else if (confirmNum && confirmLower & confirmUpper) {
    userChoices = lowerCase.concat(upperCase, numbers);
    console.log(userChoices);
  } else if (confirmLower && confirmUpper && confirmSpec) {
    userChoices = lowerCase.concat(upperCase, special);
    console.log(userChoices);
  } else if (confirmLower && confirmNum && confirmSpec) {
    userChoices = lowerCase.concat(numbers, special);
    console.log(userChoices);
  } else if (confirmUpper && confirmNum && confirmSpec) {
    userChoices = upperCase.concat(numbers, special);
    console.log(userChoices);
  }
  //two choices selected scenario
  else if (confirmLower && confirmNum) {
    userChoices = lowerCase.concat(upperCase);
    console.log(userChoices);
  } else if (confirmLower && confirmNum) {
    userChoices = lowerCase.concat(numbers);
    console.log(userChoices);
  } else if (confirmLower && confirmSpec) {
    userChoices = lowerCase.concat(special);
    console.log(userChoices);
  } else if (confirmUpper && confirmNum) {
    userChoices = upperCase.concat(numbers);
    console.log(userChoices);
  } else if (confirmUpper && confirmSpec) {
    userChoices = upperCase.concat(special);
    console.log(userChoices);
  } else if (confirmNum && confirmSpec) {
    userChoices = numbers.concat(special);
    console.log(userChoices);
  }
  // just one choice
  else if (confirmLower) {
    userChoices = lowerCase;
    console.log(userChoices);
  } else if (confirmUpper) {
    userChoices = blankUpper.concat(upperCase);
    console.log(userChoices);
  } else if (confirmNum) {
    userChoices = numbers;
    console.log(userChoices);
  } else if (confirmSpec) {
    userChoices = special;
    console.log(userChoices);
  }
  //make an empty variable to store password lenght
  var passwordBlank = [];

  //random
  for (var i = 0; i < passwordLength; i++) {
    allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
    passwordBlank.push(allChoices);
    console.log(allChoices);
  }

  password = passwordBlank.join("");
  console.log("Your password is: " + password);
  return password;
}
