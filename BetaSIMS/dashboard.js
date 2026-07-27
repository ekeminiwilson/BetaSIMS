// Check Login

if(localStorage.getItem("loggedIn")!="true"){

window.location.href="index.html";

}

// Logout

function logout(){

localStorage.removeItem("loggedIn");

window.location.href="index.html";

}

// Sidebar

function toggleSidebar(){

document.getElementById("sidebar").classList.toggle("hidden");

}

// Dark Mode

function toggleDarkMode(){

document.body.classList.toggle("dark");

localStorage.setItem(

"darkMode",

document.body.classList.contains("dark")

);

}

// Load Dark Mode

if(localStorage.getItem("darkMode")=="true"){

document.body.classList.add("dark");

}

// Clock

function updateClock(){

const now=new Date();

document.getElementById("clock").innerHTML=

now.toLocaleString();

}

setInterval(updateClock,1000);

updateClock();

// Student Count

const students=

JSON.parse(localStorage.getItem("students")) || [];

document.getElementById("studentCount").innerHTML=

students.length;

// Chart

const ctx=document.getElementById("myChart");

new Chart(ctx,{

type:"bar",

data:{

labels:[

"Computer Science",

"Software Engineering",

"Cyber Security",

"Information Technology"

],

datasets:[{

label:"Students",

data:[50,40,30,20]

}]

}

});