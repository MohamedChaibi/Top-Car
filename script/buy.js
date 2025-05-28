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

// profile
function editProfile() {
    var newName = prompt("Enter your new name:");
    var newEmail = prompt("Enter your new email:");

    if (newName) document.getElementById("username").textContent = newName;
    if (newEmail) document.getElementById("email").textContent = newEmail;
}

// --------------- About Us -------------- 
// selecting class and reasign style
function toggleBio(element) {
    var bio = element.querySelector('.bio');
    bio.style.display = bio.style.display === 'block' ? 'none' : 'block';
}

// buy car

// sell
var sellCar = function sellCar() {
    var instance={}
    instance.name=
    instance.email=
    instance.carName=
    instance.description=
    instance.price=0
    return instance
}

var tax = 0.05

function TotalWithTaxe(tax){
    return price + ( price * tax )
}
