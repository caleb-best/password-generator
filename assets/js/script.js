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

function generatePassword() {
    //variables for password
    var password = "";
    var choices = []
    var lCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    var uCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    var symbols = ["!","#","~","@","$","%","^","&","*","+"]
    var numbers = [0,1,2,3,4,5,6,7,8,9]

    //get password length
    var passlength = parseInt(prompt("For the length of your password. Pick between 8 and 128 characters"));
    if (passlength < 8 || passlength > 128 ){
      //alert if they did not pick correct value
      alert("Invalid input, Pick between 8 and 128 characters");
      return false;
    } if (isNaN(passlength)){
      //makes sure it is a number selected
      alert("Invalid input, Please Enter a number between 8 and 128");
      return false;
    }
    
    var pickLower = confirm("Include lowercase letters?");
    if(pickLower) {
  //choices array concat with the other arrays, select lowercase letters here
       choices = choices.concat(lCase);
    }
    
    var pickUpper = confirm("Include uppercase letters?");
    if (pickUpper) {
      //select uppercase letters here
      choices = choices.concat(uCase);
    }

    var pickNumbers = confirm("Include Numbers?");
    if (pickNumbers) {
      //select numbers here
      choices = choices.concat(numbers);
    }

    var pickSymbols = confirm("Include Special Characters?");
    if (pickSymbols) {
      //select symbols here
      choices = choices.concat(symbols);
    }

    for (var i = 0; i < passlength; i++) 
      password += choices[Math.floor(Math.random()*choices.length)];
      return password;

}


