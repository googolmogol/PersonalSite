
var block = document.getElementById('block');
var checkvar = true; // timing for scroll action
var counter = 2; // for the first panel 
var counter1 = 0; // for the second panel
var cur; // for determining the direction of scroll on mobile
var check = true; // to check if the keyboard is pressed


document.getElementById('txt2').style.display = 'block';
document.getElementById('border2').style.display = 'block';
document.getElementById('imginfull2').style.display = 'block';
document.getElementById('imginfull22').style.display = 'block';
document.getElementById('colorful').style.background = '#00d6cf';
setTimeout(switchTxt, 1720, -1);

/*
*********************************************************************
*****         **********         ************************************
*****   *****   *******   ****    ************************************
*****   *****   ******   *******************************************
*****   *****   ******   ********************************************
*****          *******   ********************************************
*****   **************   ********************************************
*****   ***************   *****   ***********************************
*****   ****************         ************************************
*********************************************************************
*/

//  https://learn.javascript.ru/mousewheel

if (block.addEventListener) {
	if ('onwheel' in document) {
		// IE9+, FF17+
		block.addEventListener("wheel", onWheel);
	} 
	else if ('onmousewheel' in document) {
		// устаревший вариант события
		block.addEventListener("mousewheel", onWheel);
	} 
	else {
		// Firefox < 17
		block.addEventListener("MozMousePixelScroll", onWheel);
	}
} 
else { 
	// IE8-
	block.attachEvent("onmousewheel", onWheel);
}

$(document).keydown(function (e) {
	check = false; // for zooming with touchpad or mouse
});

$(document).keyup(function (e) {
	check = true; // for zooming with touchpad or mouse
});


function onWheel(e) {
	e = e || window.event;
	var delta = e.deltaY || e.detail || e.wheelDelta;
	if ((Math.abs(delta) != 100 || delta != 0) && check) { // for zooming with touchpad or mouse
		switchTxt(delta); 
		e.preventDefault ? e.preventDefault() : (e.returnValue = false);
	}
}


/*
*********************************************************************
*****         **********         ************************************
*****   ****    *******   *****   ***********************************
*****   *****   ******   ********************************************
*****   ****    ******   ********************************************
*****          *******   ********************************************
*****   **************   ********************************************
*****   ***************   *****   ***********************************
*****   ****************         ************************************
*********************************************************************
*/


/*
********************************************************************
*****      *****      *****         ********          ******************
*****   *   ***   *   ****   ******   ******   ******   ***************
*****   **   *   **   ****   ******   ******   ******   **************
*****   ****   ****   ****   ******   ******            ****************
*****   ***********   ****   ******   ******   ******    **************
*****   ***********   ****   ******   ******   *******   **********
*****   ***********   *****   *****   ******   *******   ************
*****   ***********   *******       ********            **************
********************************************************************
*/

//  https://www.w3schools.com/code/tryit.asp?filename=GB96KV1GT43O

function initY (event) {
	cur = event.touches[0].clientY;
}

function scrollMob(event) {
	var y = event.touches[0].clientY;
	if (cur < y) { switchTxt(-1); }
	else { switchTxt(1); }
}

/*
********************************************************************
*****      *****      *****         ********          ******************
*****   *   ***   *   ****   ******   ******   ******   ***************
*****   **   *   **   ****   ******   ******   ******   **************
*****   ****   ****   ****   ******   ******            ****************
*****   ***********   ****   ******   ******   ******    **************
*****   ***********   ****   ******   ******   *******   **********
*****   ***********   *****   *****   ******   *******   ************
*****   ***********   *******       ********            **************
********************************************************************
*/


function switchTxt(delta) {
	if (checkvar) {
		//e.stopPropagation();
		if (delta > 0) {
			switchUp();
		}
		else {
			switchDown();
		}
		
		checkvar = false;

		// Hide current text - opacity to 0
		document.getElementById('txt' + counter1).classList.add("hidecur");

		setTimeout("document.getElementById('txt" + counter1 + "').classList.remove('hidecur');", 500);
		// And remove animation


		// SWITCHING TEXT PANELS
		setTimeout("document.getElementById('txt" + counter1 + "').style.display = 'none';", 450);

		setTimeout("document.getElementById('txt" + counter + "').style.display = 'block'", 0); 
		// SWITCHING TEXT PANELS  

		setTimeout("checkvar = true", 1500);
	}
}

function switchUp () {
	counter++;
	counter1 = counter - 1;
	if(counter > 4) { counter = 1; }
	if(counter == 1) { counter1 = 4; }
	switch(counter){
		case 1: setTimeout("document.getElementById('colorful').style.background = '#00d6cf';", 500);
			break;
		case 2: setTimeout("document.getElementById('colorful').style.background = '#228dfc';", 500);

			break;
		case 3: setTimeout("document.getElementById('colorful').style.background = '#ff303f';", 500);
			break;
		case 4: setTimeout("document.getElementById('colorful').style.background = '#dea51c';", 500);
			break;
		default:
			document.getElementById('colorful').style.background = '#fff';
	}



	document.getElementById('txt' + counter).classList.add('animup');
	setTimeout("document.getElementById('txt" + counter + "').classList.remove('animup');", 1500);


	setTimeout("document.getElementById('imginfull' + counter).style.display = 'block';", 1500);
	setTimeout("document.getElementById('imginfull' + counter).classList.add('fullimgin');", 1500);
	setTimeout("document.getElementById('imginfull' + counter1).classList.remove('fullimgin');", 1500);
	setTimeout("document.getElementById('imginfull' + counter1).classList.add('fullimgout');", 200);
	setTimeout("document.getElementById('imginfull' + counter1).style.display = 'none';", 400);
	setTimeout("document.getElementById('imginfull' + counter1).classList.remove('fullimgout');", 400);

	if(counter == 2) {  
		setTimeout("document.getElementById('imginfull12').classList.remove('fullimgin');", 1500);
		setTimeout("document.getElementById('imginfull12').classList.add('fullimgout');", 200);
		setTimeout("document.getElementById('imginfull12').style.display = 'none';", 400);
		setTimeout("document.getElementById('imginfull12').classList.remove('fullimgout');", 400);
	}

	if(counter == 3) {  
		setTimeout("document.getElementById('imginfull22').classList.remove('fullimgin');", 1500);
		setTimeout("document.getElementById('imginfull22').classList.add('fullimgout');", 200);
		setTimeout("document.getElementById('imginfull22').style.display = 'none';", 400);
		setTimeout("document.getElementById('imginfull22').classList.remove('fullimgout');", 400);
	}

	if(counter == 4) {
		setTimeout("document.getElementById('imginfull32').style.zIndex = 0;", 200);
		setTimeout("document.getElementById('imginfull32').classList.remove('fullimgin');", 1500);
		setTimeout("document.getElementById('imginfull32').classList.add('fullimgout');", 200);
		setTimeout("document.getElementById('imginfull32').style.display = 'none';", 400);
		setTimeout("document.getElementById('imginfull32').classList.remove('fullimgout');", 400);
	}

	if (counter1 == 4) {
		setTimeout("document.getElementById('imginfull12').style.display = 'block';", 1500);
		setTimeout("document.getElementById('imginfull12').classList.add('fullimgin');", 1500);
	}

	if (counter1 == 1) {
		setTimeout("document.getElementById('imginfull22').style.display = 'block';", 1500);
		setTimeout("document.getElementById('imginfull22').classList.add('fullimgin');", 1500);
	}

	if (counter1 == 2) {
		setTimeout("document.getElementById('imginfull32').style.zIndex = 10;", 1500);
		setTimeout("document.getElementById('imginfull32').style.display = 'block';", 1500);
		setTimeout("document.getElementById('imginfull32').classList.add('fullimgin');", 1500);
	}


	if (counter1 == 4) {
		setTimeout("document.getElementById('imginfull4').src='img/aboutimg/manlikefull.png';", 200);
		setTimeout("document.getElementById('imginfull4').src='img/aboutimg/manlikecut.png';", 1000);
	} 

	setTimeout("document.getElementById('border' + counter1).classList.add('decrease');", 200);
	setTimeout("document.getElementById('border" + counter1 + "').classList.remove('decrease');", 1500);
	setTimeout("document.getElementById('border" + counter1 + "').style.display = 'none';", 900);

	setTimeout("document.getElementById('border' + counter).style.display = 'block';", 200);
	setTimeout("document.getElementById('border' + counter).classList.add('increase');", 200);

	setTimeout("document.getElementById('border" + counter + "').classList.remove('decrease');", 1500);

}

function switchDown () {
	counter--;
	counter1 = counter + 1;
	if(counter < 1) { counter = 4; }
	if(counter == 4) { counter1 = 1; }
	switch(counter){
		case 1: setTimeout("document.getElementById('colorful').style.background = '#00d6cf';", 500);
			break;
		case 2: setTimeout("document.getElementById('colorful').style.background = '#228dfc';", 500);

			break;
		case 3: setTimeout("document.getElementById('colorful').style.background = '#ff303f';", 500);
			break;
		case 4: setTimeout("document.getElementById('colorful').style.background = '#dea51c';", 500);
			break;
		default:
			document.getElementById('colorful').style.background = '#fff';
	}
	document.getElementById('txt' + counter).classList.add('animdown');
	setTimeout("document.getElementById('txt" + counter + "').classList.remove('animdown');", 1500);


	/*setTimeout("document.getElementById('border' + counter1).classList.add('decrease');", 200);
	setTimeout("document.getElementById('border" + counter1 + "').classList.remove('decrease');", 1500);
	setTimeout("document.getElementById('border" + counter1 + "').style.display = 'none';", 900);

	setTimeout("document.getElementById('border' + counter).style.display = 'block';", 200);
	setTimeout("document.getElementById('border' + counter).classList.add('increase');", 200);
	setTimeout("document.getElementById('border" + counter + "').classList.remove('decrease');", 1500);*/

	setTimeout("document.getElementById('imginfull' + counter).style.display = 'block';", 1500);
	setTimeout("document.getElementById('imginfull' + counter).classList.add('fullimgin');", 1500);
	setTimeout("document.getElementById('imginfull' + counter1).classList.remove('fullimgin');", 1500);
	setTimeout("document.getElementById('imginfull' + counter1).classList.add('fullimgout');", 200);
	setTimeout("document.getElementById('imginfull' + counter1).style.display = 'none';", 400);
	setTimeout("document.getElementById('imginfull' + counter1).classList.remove('fullimgout');", 400);

	if(counter1 == 1) {  
		setTimeout("document.getElementById('imginfull12').classList.remove('fullimgin');", 1500);
		setTimeout("document.getElementById('imginfull12').classList.add('fullimgout');", 200);
		setTimeout("document.getElementById('imginfull12').style.display = 'none';", 400);
		setTimeout("document.getElementById('imginfull12').classList.remove('fullimgout');", 400);
	}

	if(counter1 == 2) {  
		setTimeout("document.getElementById('imginfull22').classList.remove('fullimgin');", 1500);
		setTimeout("document.getElementById('imginfull22').classList.add('fullimgout');", 200);
		setTimeout("document.getElementById('imginfull22').style.display = 'none';", 400);
		setTimeout("document.getElementById('imginfull22').classList.remove('fullimgout');", 400);
	}

	if(counter1 == 3) {  
		setTimeout("document.getElementById('imginfull32').style.zIndex = 0;", 200);
		setTimeout("document.getElementById('imginfull32').classList.remove('fullimgin');", 1500);
		setTimeout("document.getElementById('imginfull32').classList.add('fullimgout');", 200);
		setTimeout("document.getElementById('imginfull32').style.display = 'none';", 400);
		setTimeout("document.getElementById('imginfull32').classList.remove('fullimgout');", 400);
	}

	if (counter1 == 2) {
		setTimeout("document.getElementById('imginfull12').style.display = 'block';", 1500);
		setTimeout("document.getElementById('imginfull12').classList.add('fullimgin');", 1500);
	}

	if (counter1 == 3) {
		setTimeout("document.getElementById('imginfull22').style.display = 'block';", 1500);
		setTimeout("document.getElementById('imginfull22').classList.add('fullimgin');", 1500);
	}

	if (counter1 == 4) {
		setTimeout("document.getElementById('imginfull32').style.zIndex = 10;", 1500);
		setTimeout("document.getElementById('imginfull32').style.display = 'block';", 1500);
		setTimeout("document.getElementById('imginfull32').classList.add('fullimgin');", 1500);
	}


	if (counter1 == 4) {
		setTimeout("document.getElementById('imginfull4').src='img/aboutimg/manlikefull.png';", 200);
		setTimeout("document.getElementById('imginfull4').src='img/aboutimg/manlikecut.png';", 1000);
	} 

	setTimeout("document.getElementById('border' + counter1).classList.add('decrease');", 200);
	setTimeout("document.getElementById('border" + counter1 + "').classList.remove('decrease');", 1500);
	setTimeout("document.getElementById('border" + counter1 + "').style.display = 'none';", 900);

	setTimeout("document.getElementById('border' + counter).style.display = 'block';", 200);
	setTimeout("document.getElementById('border' + counter).classList.add('increase');", 200);
    

	setTimeout("document.getElementById('border" + counter + "').classList.remove('decrease');", 1500);

}

/*var timer;

function changeImg(number) {
	var n = 0;
	timer = setInterval(function() {
		n++;
		if (n == 9) {
			clearInterval(timer);
			if (number == counter) { setTimeout(changeImg, 7000, counter); }
			else {
				clearInterval(timer);
				document.getElementById('border' + number).src='img/aboutimg/border'+ number + '.png';
			}
		}
		else {
			document.getElementById('border' + number).src='img/aboutimg/'+ number + n + '.png';	
		}	
	}, 200);
}

changeImg(1);*/

