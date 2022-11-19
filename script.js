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
            