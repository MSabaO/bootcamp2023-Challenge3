// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordLength;
var confirmLower;
var confirmUpper;
var confirmNum;
var confirmSpec;
var usesrChoices;

// lower case letters
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n","ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// to upper case
let upperCase = lowerCase.toUpperCase ();
// special caracters
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//var special = ["!", "#", "$", "%", "&", "'", "(",")", "*", "+", ",", "-", ".", "/", "\", "<"];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

//Function
function generatePassword () {
  passwordLength = prompt("How long would you link your password to be? Write in the box a number between 8 and 128");
  console.log("Length? " + passwordLength)

  if(!passwordLength){
    alert("Length is required, please start again and provide number");
  }else if (passwordLength<8 || passwordLength>128) {
    passwordLength = prompt("Password length must be between 8 and 128");
    console.log("Lenght? " + passwordLength);
      
  }else {
    confirmSpec = confirm("Would you like it to have special characters?");
    console.log("Special Characters? " + confirmSpec);
    confirmNum = confirm("Would you like this to have numbers?");
    console.log("Numbers?" + confirmNum);
    confirmLower = confirm("Woudl you like it to have lower case letters?");
    console.log("Lower case?");
    confirmUpper = confirm("Would you like it to have upper case letters?");
      };

      //
      if (!confirmSpec && confirmNum && confirmLower && confirmUpper){
        usercChoices = alert("A criteria is required");

      }
      else if (confirmSpec && confirmNum && confirmLower && confirmUpper)
      {
        usercChoices = lowerCase.concat(special,numbers,upperCase);
        console.log(usercChoices);
              }
    
      }
  }
  ;}

