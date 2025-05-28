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
    if (bio.style.display === 'block') {
    bio.style.display = 'none'
    } else {
    bio.style.display = 'block'
}
}

// --------------- buy car -------------- 


function Car(name, type, speedMax, power, acceleration, category, photo, price,description) {
return { name:name, type:type, speedMax:speedMax, power:power, acceleration:acceleration, category:category, photo:photo, price:price,description:description };
}

var cars = [];

cars.push(Car("S V J", "Lamborghini", 350, 770, 2.8, "Sport", "../media/cars/lambo.png", 490.000,"full carbon fiber body."));
cars.push(Car("Urus", "Lamborghini", 312, 800, 3.4, "Sport", "../media/cars/urus.png", 370.000,"first lamborghini suv."));
cars.push(Car("Lavante", "Maserati", 280, 580, 3.7, "SUV", "../media/cars/maserati_levante.png", 180.000,"first maserati suv."));
cars.push(Car("Grand Turismo", "Maserati", 320, 761, 2.7, "Sport", "../media/cars/granturismo.png", 230.000,"nice V8 sound."));
cars.push(Car("G-class 6x6", "Mercedes", 185, 544, 6.8, "SUV", "../media/cars/G63_6x6.png", 1800.000,"first luxery 6x6 car in the world."));
cars.push(Car("S63", "Mercedes", 280, 585, 3.9, "Sedan", "../media/cars/S63.png", 200.000,"luxery with V8."));
cars.push(Car("Land Cruiser", "Toyota", 210, 415, 5.8, "SUV", "../media/cars/land-cruiser.png", 95.000,"the best suv ."));
cars.push(Car("Supra", "Toyota", 290, 340, 3.2, "Sport", "../media/cars/supra.png", 70.000,"build by toyota and bmw."));
function renderInTheDom(array){
    var wrapper =$("#wrapper")
    for(var i = 0 ; i<array.length ; i++){
        wrapper.append(`<div class="vehicle-card">
		<div class="details">      
      <div class="thumb-gallery">
        <img class="first" src=${array[i].photo} />
        <img class="second" src=${array[i].photo} />        
      </div>
			<div class="info">
    			<h3>${array[i].name}</h3>
				<div class="stars" data-stars="1">
					<svg height="22" width="20" class="star rating" data-rating="5">
						<polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" style="fill-rule:nonzero;"/>
					</svg>
					<svg height="22" width="20" class="star rating" data-rating="2">
						<polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" style="fill-rule:nonzero;"/>
					</svg>
					<svg height="22" width="20" class="star rating" data-rating="3">
						<polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" style="fill-rule:nonzero;"/>
					</svg>
					<svg height="22" width="20" class="star rating" data-rating="4">
						<polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" style="fill-rule:nonzero;"/>
					</svg>
					<svg height="22" width="20" class="star rating" data-rating="5">
						<polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" style="fill-rule:nonzero;"/>
					</svg>
				</div>
				<div class="price">
					<span>Price Starting at</span>
					<h4>${array[i].price.toFixed(3)}</h4>
				</div>
				<div class="ctas">
					<a href="#" class="btn primary">buy</a>
			        <div style="clear:both;"></div>
		        </div>
				<div class="desc">
					<p>${array[i].description}</p>
				</div>
				<div class="specs">
					<div class="spec mpg">
						<span>EPA City/Hwy</span>
						<p>9/14<span>mpg</p>
					</div>
					<div class="spec mpg">
						<span>0-60</span>
						<p>${array[i].acceleration}<span>sec</p>
					</div>
					<div class="spec mpg">
						<span>Horsepower</span>
						<p>${array[i].power}<span>hp</p>
					</div>
				</div>
			</div>
		</div>
	</div>`)
    }
}
renderInTheDom(cars)

// --------------- sell -------------- 

var sellCar = function sellCar() {
    var instance={}
		instance.name=""
		instance.type=""
		instance.speedMax=0
		instance.power=0
		instance.acceleration=0
		instance.category=""
		instance.photo="0"
		instance.price=0
		instance.description=""
    return instance
}

