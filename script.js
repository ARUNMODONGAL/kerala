var Username=document.getElementById("Username");
var password=document.getElementById("pass");

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