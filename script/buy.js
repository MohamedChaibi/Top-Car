// --------------- Nav bar -------------- 
function openNav() {
document.getElementById("mySidebar").style.width = "250px";
document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
document.getElementById("mySidebar").style.width = "0";
document.getElementById("main").style.marginLeft= "0";
}

// --------------- local Storage -------------- 
var email="jdididaoud@gmail.com"
var password="1234"
localStorage.setItem("credentials",JSON.stringify([{email:email,password:password}]))


var credentials=JSON.parse(localStorage.getItem("credentials"))
//  credentials

console.log( credentials.email)


