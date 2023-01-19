// Assignment Code
// code refactoring -> updated all previous var to let
let generateBtn = document.querySelector("#generate");
// getting access to the user form and its elements
let usrForm = document.getElementById("pwdInputs");
// adding oninput listeners to the 5 user inputs
usrForm["pwdLength"].oninput = function() {
  // updates the "hint" with value
  document.getElementById("labelSpanPwdLabel").innerHTML = "("+ usrForm["pwdLength"].value+")";
  // no additional validation necessary
}
usrForm["pwdNumeric"].oninput = function() {
  // updates the "hint" with a check mark or x to 
  document.getElementById("labelSpanPwdNumeric").innerHTML = "("+ ((usrForm["pwdNumeric"].value) == "1" ? "&#x2714;" : "&#x2718;") + ")";
  // additional validation: checks if all character type inputs are no to throw an error
  validateCharTypeInput();
}


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  let passwordLength = 32;
  let passWord = "testpassword"

  return passWord;
}

function validateCharTypeInput() {
  // if all character type inputs are "no", throws an error by 
  //  - chaning the border colour around them
  //  - hiding the continue button
  // otherwise 
  //  - returning the border to normal colour
  //  - displaying the continue button and the user can proceed with password generation
  if (usrForm['pwdNumeric'].value === "0" &&
      usrForm['pwdLower'].value === "0"   && 
      usrForm['pwdUpper'].value === "0"   &&
      usrForm['pwdSpecial'].value === "0") {
    usrForm['pwdNumeric'].parentNode.classList.add("red-border");
    usrForm['pwdLower'].parentNode.classList.add("red-border");
    usrForm['pwdUpper'].parentNode.classList.add("red-border");
    usrForm['pwdSpecial'].parentNode.classList.add("red-border");
    usrForm['continue'].disabled='true';
   } else {
    usrForm['pwdNumeric'].parentNode.classList.remove("red-border");
    usrForm['pwdLower'].parentNode.classList.remove("red-border");
    usrForm['pwdUpper'].parentNode.classList.remove("red-border");
    usrForm['pwdSpecial'].parentNode.classList.remove("red-border");
    usrForm['continue'].disabled='false';
  }
}