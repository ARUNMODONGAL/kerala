var Username=document.getElementById("Username");
var password=document.getElementById("pass");
var phonenmumber=document.getElementById("mobile");


function verify(){
    if((Username.value=="")||(password.value=="")){
        alert("Fields cannot be empty");
        return false;
    }
    else if(password.value.length<8){
        alert("password length is insufficient");
        return false;
    }
    else{
        alert("form submitted");
        return true;
    }
}

function validate(){

    let regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(regex.test(email.value)){
        error.innerHTML="Email is valid";
        error.style.color="green";
        return true;

    }
    else{
        error.innerHTML="Email is invalid";
        error.style.color="red";
        return false;
    } 
    }
    function emailCheck(){

        var email = document.getElementById('signEmail').value;
        var emailHelpBlock = document.getElementById('emailHelpBlock');
      
        if(email.trim().length!=0){
          if(!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){
            emailHelpBlock.innerHTML = 'Invalid email format!';
            emailHelpBlock.style.color = 'Red';
            return false;
          }
            emailHelpBlock.innerHTML = '';
            return true;
          }
          emailHelpBlock.innerHTML = '';
        }
        function mobCheck(){

            var mob = document.getElementById('mob').value;
            var mobError = document.getElementById('mobHelpBlock');
          
            if(mob.trim().length!=0){
              if(mob.match(/^(\d{3})[-. ]*(\d{3})[-. ]*(\d{4})$/)){
                mobError.innerText = '';
                return true;
              }
              else{
                mobError.style.color = 'Red';
                mobError.innerText = 'Invalid mobile number!';
                return false;
              }
              }
              mobError.innerText = '';
            }      



            function pswdCheck() {

                var myInput = document.getElementById("signPswd");
                var letter = document.getElementById("letter");
                var capital = document.getElementById("capital");
                var number = document.getElementById("number");
                var length = document.getElementById("length");
            
                // Validate lowercase letters
                var lowerCaseLetters = /[a-z]/g;
                if(myInput.value.match(lowerCaseLetters)) {
                  letter.classList.remove("invalid");
                  letter.classList.add("valid");
                } else {
                  letter.classList.remove("valid");
                  letter.classList.add("invalid");
              }
              
                // Validate capital letters
                var upperCaseLetters = /[A-Z]/g;
                if(myInput.value.match(upperCaseLetters)) {
                  capital.classList.remove("invalid");
                  capital.classList.add("valid");
                } else {
                  capital.classList.remove("valid");
                  capital.classList.add("invalid");
                }
              
                // Validate numbers
                var numbers = /[0-9]/g;
                if(myInput.value.match(numbers)) {
                  number.classList.remove("invalid");
                  number.classList.add("valid");
                } else {
                  number.classList.remove("valid");
                  number.classList.add("invalid");
                }
              
                // Validate length
                if(myInput.value.trim().length >= 8) {
                  length.classList.remove("invalid");
                  length.classList.add("valid");
                } else {
                  length.classList.remove("valid");
                  length.classList.add("invalid");
                }
              }
            
            
function valid(){
    if(!emailCheck() || !mobCheck() || !pswdCheck() == false){
      return false;
  
    }
    else{
      return true;
    }
  }



  
  