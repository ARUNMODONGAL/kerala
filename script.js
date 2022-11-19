var Username=document.getElementById("Username");
var password=document.getElementById("pass");

function verify(){
    if((Username.value=="")||(password.value=="")){
        alert("Fields cannot be empty");
        return false;
    }
    else{
        alert("form submitted");
        return true;
    }
}