// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function writePassword() {
    var password = "";
    var choices = []
    var lCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    var uCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    var symbols = ["!","#","~","@","$","%","^","&","*","+"]
    var numbers = [0,1,2,3,4,5,6,7,8,9]

    var passlength = parseInt(prompt("For the length of your password. Pick between 8 and 128 characters"));

    if (passlength < 8 || passlength > 128 ){
      //alert if they did not pick correct value
      alert("Invalid input, Pick between 8 and 128 characters");
      return;
      
    }
}

