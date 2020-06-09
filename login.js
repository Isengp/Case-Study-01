function validate(callback){

let user = document.getElementById("user");
let pass = document.getElementById("pass");

     if(user.value === "admin" && pass.value === "12345"){
        callback();
        alert("Sign-in Successful")
        return true;
     }
     
     else{
         alert("Please enter valid Username/Password");
         return false;
     }
 }

 function main(){
     location.replace("main.html");
 }
