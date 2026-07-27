function togglePassword(){

const password=document.getElementById("password");

if(password.type==="password"){

password.type="text";

}else{

password.type="password";

}

}

document.getElementById("loginForm").addEventListener("submit",function(e){

e.preventDefault();

const username=document.getElementById("username").value.trim();

const password=document.getElementById("password").value.trim();

if(username==="admin" && password==="12345"){

localStorage.setItem("loggedIn","true");

window.location.href="dashboard.html";

}else{

document.getElementById("message").innerHTML="Incorrect username or password.";

}

});