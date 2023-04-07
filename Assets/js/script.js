var generateBtn = document.querySelector("#generate");

function generatePassword() {

  // prompt for password length
  let length = parseInt(prompt("Choose password length. \nPassword must be 8-128 characters in length."));
  
  // validate password length
  if (length < 8 || length > 128) {
    alert("Error! \nInvalid passwored length. \nPlease enter password length between 8 and 128 characters.")
    return "" // added return to end function if invalid length entered
  } 

  // prompt for character types
  let incUpperCase = confirm("Would you like to include upper case characters?");
  let incLowerCase = confirm("Would you like to include lower case characters?");
  let incNumeric = confirm("Would you like to include numbers?");
  let incSpecialCharacter = confirm("Would you like to include special characters?");
  
  // validate character types
  if (!incUpperCase && !incLowerCase && !incNumeric && !incSpecialCharacter) {
    alert("Error! Must include at least one type of character.")
    return ""  // added return to end function if no character types are selected
  }

  // returns string of available characters if that type is selected
  let specialCharacter = "!\"#$%&'()*+,-./:;<=>";
  let passCharacter = "";
  if (incSpecialCharacter) {
    passCharacter = specialCharacter
  };

  // returns string of available characters if that type is selected
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let passLower = "";
  if (incLowerCase) {
    passLower = lowerCase
  };
  
  // returns string of available characters if that type is selected
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let passUpper = "";
  if (incUpperCase) {
    passUpper = upperCase
  };
  
  // returns string of available characters if that type is selected
  let numeric = "0123456789";
  let passNum = "";
  if (incNumeric) {
    passNum = numeric
  };

  // creates an object with properties of selected types
  let options = {
    passLower,
    passUpper,
    passNum,
    passCharacter,
  }
      
  // picks a random character from a string
  var randomChar = (string) => string[Math.floor(Math.random() * string.length)];
  
  let pwd = [];

  // randomly pushes one character from each type selected to pwd
  for (const property in options) {
    pwd.push(randomChar(options[property]));
  }
  
  let characters = "";

  // passes all available characters into single string
  for (const property in options) {
    characters += options[property];
  }
  
  // records how many types of characters were selected
  const optionskeyslength = Object.keys(options).length;
  
  /* pushes random characters from available list to pwd
  until length limit is reached */
  for (let i = optionskeyslength; i < length; i++) {
    pwd.push(randomChar(characters));
  }

  // shuffles array
  const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);

  let finalPassword = pwd.join("");
  
  return finalPassword; 
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
