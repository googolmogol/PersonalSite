setTimeout("document.getElementById('preloader').style.display = 'none'", 2500);
setTimeout("document.getElementById('menup').style.display = 'none'", 6400);
setTimeout("document.getElementById('socialmediap').style.display = 'none'", 7700);


var laptop = document.getElementById('laptop');

function randomInteger(min, max) {
	// случайное число от min до (max+1)
  	var rand = min + Math.random() * (max + 1 - min);
  	return Math.floor(rand);
}

var check = Math.random();
var topV;
var leftV;

if (check > 0.5) {
	topV = randomInteger(50, window.innerHeight)-50;
	leftV = 0;
}
else {
	topV = window.innerHeight-50;
	leftV = randomInteger(60, innerWidth)-60;
}

function resizeMove() {
	if (topV >= window.innerHeight) {
		topV = window.innerHeight - 60;
	}
	if (leftV >= innerWidth) {
		leftV = window.innerWidth - 70;
	}
}

var down = true;
var left = false;

setTimeout(function (){
	var timer = setInterval(function() {
		laptop.style.display='block';
		var lapTop = $(laptop).position().top;
		var lapLeft = $(laptop).position().left;

		if (lapTop > (window.innerHeight - 50)) { down = false; }
		else if (lapTop < 0) { down = true; }

		if (down == true) { topV += 1; }
		else {topV -= 1;}
		laptop.style.top = topV + 'px';

		if (lapLeft > (window.innerWidth - 60)) { left = true; }
		else if (lapLeft < 0) { left = false; }

		if (left == false) { leftV += 1; }
		else {leftV -= 1;}
		laptop.style.left = leftV + 'px';
	}, 65);
}, 8000);




