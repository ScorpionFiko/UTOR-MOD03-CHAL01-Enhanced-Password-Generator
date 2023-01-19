// Assignment Code
// code refactoring -> updated all previous var to let
let generateBtn = document.querySelector("#generate");
// getting access to the user form and its elements
let usrForm = document.getElementById("pwdInputs");
// adding oninput listeners to the 5 user inputs
// password length slider
usrForm["pwdLength"].oninput = function() {
  // updates the "hint" with value
  writeInputValue(document.getElementById("labelSpanPwdLabel"),usrForm["pwdLength"].value);
  // no additional validation necessary
}
// numeric character type
usrForm["pwdNumeric"].oninput = function() {
  // updates the "hint" with a check mark or x mark
  writeInputValue(document.getElementById("labelSpanPwdNumeric"), ((usrForm["pwdNumeric"].value) == "1" ? "&#x2714;" : "&#x2718;"));
  // additional validation: checks if all character type inputs are 'no' to throw an error
  validateCharTypeInput();
}
// lower case character type
usrForm["pwdLower"].oninput = function() {
  // updates the "hint" with a check mark or x mark
  writeInputValue(document.getElementById("labelSpanPwdLower"), ((usrForm["pwdLower"].value) == "1" ? "&#x2714;" : "&#x2718;"));
  // additional validation: checks if all character type inputs are 'no' to throw an error
  validateCharTypeInput();
}
// upper case character type
usrForm["pwdUpper"].oninput = function() {
  // updates the "hint" with a check mark or x mark 
  writeInputValue(document.getElementById("labelSpanPwdUpper"), ((usrForm["pwdUpper"].value) == "1" ? "&#x2714;" : "&#x2718;"));
  // additional validation: checks if all character type inputs are 'no' to throw an error
  validateCharTypeInput();
}
// special character type
usrForm["pwdSpecial"].oninput = function() {
  // updates the "hint" with a check mark or x mark
  writeInputValue(document.getElementById("labelSpanPwdSpecial"), ((usrForm["pwdSpecial"].value) == "1" ? "&#x2714;" : "&#x2718;"));
  // additional validation: checks if all character type inputs are 'no' to throw an error
  validateCharTypeInput();
}
// adding event listener for the continue button
usrForm['continue'].onclick = function() {
  // hides the form and writes the password
  hideInputForm();
  writePassword();
}


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// changed the event listener function to showInputForm function to display the form
generateBtn.addEventListener("click", showInputForm);

function generatePassword() {
  // passWord variable to hold the password
  let passWord = "";
  // arrays with the different types of characters
  let numericChars = ["0","1","2","3","4","5","6","7","8","9"];
  let lowerChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let upperChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  let specialChars = ["!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~","\\"]; 
  // empty password array that will be populated with user selected characters types
  let passwordArray = [];
  // populating password array with user selected character types
  if (usrForm['pwdNumeric'].value === "1") {
    passwordArray=passwordArray.concat(numericChars);
  }
  if (usrForm['pwdLower'].value === "1") {
    passwordArray=passwordArray.concat(lowerChars);
  }
  if (usrForm['pwdUpper'].value === "1") {
    passwordArray=passwordArray.concat(upperChars);
  }
  if (usrForm['pwdSpecial'].value==="1") {
    passwordArray=passwordArray.concat(specialChars);    
  }
  // for the password length, selects a random character from the password array and add it to the variable
  // explicitly casting the password length to an integer
  for (let i = 1; i <= parseInt(usrForm['pwdLength'].value); i++) {
    passWord = passWord + passwordArray[Math.floor(Math.random() * passwordArray.length)]
  }
  // return the variable
  return passWord;
}
// shows the input form
function showInputForm() {
  // writes the default or current input values to the span element
  writeInputValue(document.getElementById("labelSpanPwdLabel"),usrForm["pwdLength"].value);
  writeInputValue(document.getElementById("labelSpanPwdNumeric"), ((usrForm["pwdNumeric"].value) == "1" ? "&#x2714;" : "&#x2718;"));
  writeInputValue(document.getElementById("labelSpanPwdLower"), ((usrForm["pwdLower"].value) == "1" ? "&#x2714;" : "&#x2718;"));
  writeInputValue(document.getElementById("labelSpanPwdUpper"), ((usrForm["pwdUpper"].value) == "1" ? "&#x2714;" : "&#x2718;"));
  writeInputValue(document.getElementById("labelSpanPwdSpecial"), ((usrForm["pwdSpecial"].value) == "1" ? "&#x2714;" : "&#x2718;"));
  // validates default inputs
  validateCharTypeInput();
  // shows the form by adding the "show" class
  usrForm.classList.add("show");
}
// hides the input form
function hideInputForm() {
  usrForm.classList.remove("show");
}

// writes the input value in the span element
// must supply valid span element and the value to be put
function writeInputValue(spanElement, value) {
  spanElement.innerHTML = "("+ value +")";
}

function validateCharTypeInput() {
  // if all character type inputs are "no", throws an error by 
  //  - chaning the border colour around them
  //  - hiding the continue button
  // otherwise 
  //  - returning the border to normal colour
  //  - displaying the continue button and the user can proceed with password generation
  if (usrForm['pwdNumeric'].value === "0" && usrForm['pwdLower'].value === "0"   && 
      usrForm['pwdUpper'].value === "0"   && usrForm['pwdSpecial'].value === "0") {
    // changing the border colour is done by adding/removing a class from the <section> element
    // with class .form-input-group as that contains the border for the label and slider
    usrForm['pwdNumeric'].parentNode.classList.add("red-border");
    usrForm['pwdLower'].parentNode.classList.add("red-border");
    usrForm['pwdUpper'].parentNode.classList.add("red-border");
    usrForm['pwdSpecial'].parentNode.classList.add("red-border");
    usrForm['continue'].disabled=true;
   } else {
    usrForm['pwdNumeric'].parentNode.classList.remove("red-border");
    usrForm['pwdLower'].parentNode.classList.remove("red-border");
    usrForm['pwdUpper'].parentNode.classList.remove("red-border");
    usrForm['pwdSpecial'].parentNode.classList.remove("red-border");
    usrForm['continue'].disabled=false;
  }
}