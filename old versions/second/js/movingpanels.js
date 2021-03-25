var paneldvlpr = document.getElementById('dvlprpanel');
var panelhello = document.getElementById('hellop');
var panelnmis = document.getElementById('nmisp')
var widthnmis = panelnmis.clientWidth;
var dvlprwidth = paneldvlpr.clientHeight;

//alert($(panelhello).offset().top);
//alert(panelhello.clientHeight);

setTimeout("document.getElementById('nmpanel').style.display = 'none'", 5100);
setTimeout("document.getElementById('blinp').style.display = 'none'", 3700);




setTimeout(Panels, 3700, panelhello, 0, 1,5);       
setTimeout(Panels, 4700, paneldvlpr, dvlprwidth, 2,15);     
setTimeout(Panels, 4500, panelhello, 0, 3, 5); 
setTimeout(Panels, 3900, panelnmis, widthnmis, 4, 5); 



//alert(window.innerWidth * 20 / 100);



function Panels(obj, counter, check, time) {
    var height = panelhello.clientHeight;
    var leftnmis = $(panelnmis).position().left;
    var timer = setInterval(function() {
        if (check == 1) {
            counter += 5;
            obj.style.width = counter + 'px';

            if (counter >= 125 && window.innerWidth > 1000) {
                clearInterval(timer);
            }
            if (counter >= 170 && window.innerWidth <= 1000 && window.innerWidth >= 700 && window.innerWidth < window.innerHeight) {
                clearInterval(timer);
            }
            if (counter >=125 && window.innerWidth <= 700 && window.innerWidth >= 501 && window.innerHeight > window.innerWidth) {
                clearInterval(timer);
            }
            if (counter >= 75 && window.innerWidth < 850 && window.innerWidth > 635 && window.innerHeight < window.innerWidth) {
                clearInterval(timer);
            }
            if (counter >= 105 && window.innerWidth <= 1000 && window.innerWidth > 850) {
                clearInterval(timer);
            }
           
          
            if (counter >= 55 && window.innerWidth < 635 && window.innerWidth > window.innerHeight) {
                clearInterval(timer);
            }
            if (counter >= 95 && window.innerWidth < 500 && window.innerWidth > 370) {
                clearInterval(timer);
            }
            if (window.innerWidth < 370 && counter >= 75 && window.innerHeight > window.innerWidth){
                    clearInterval(timer);
            }
            if (counter >= 56 && window.innerWidth < 300) {
                clearInterval(timer);
            }
            if (counter >=56 && window.innerWidth < 500 && window.innerWidth > window.innerHeight) {
                clearInterval(timer); 
            }
        }

        if (check == 2) {
            counter -= 5;
            obj.style.height = counter + 'px';
            if (counter <= 0) {
                clearInterval(timer);
                obj.style.display = 'none'; 
            }
        }

        if (check == 3) {
            counter -= 5;
            height -= 5;
            document.getElementById('hello').style.color = '#fff';
            obj.style.height = height + 'px';
            if (height <= 0) {
                clearInterval(timer);
                obj.style.display = 'none'; 
            }
        }

        if (check == 4) {
            counter += 5;
            leftnmis -= 5;
            obj.style.width = counter + 'px';
            obj.style.left = leftnmis + 'px';
            
            if (counter >= 130 && window.innerWidth > 1000) {
                clearInterval(timer);
                setTimeout(Panels, 400, panelnmis, panelnmis.clientWidth, 5, 5); 
            }
            if (counter >=140 && window.innerWidth <= 700 && window.innerWidth >= 501 && window.innerHeight > window.innerWidth) {
                clearInterval(timer);
                setTimeout(Panels, 400, panelnmis, panelnmis.clientWidth, 5, 5); 
            }
            if (counter >= 113 && window.innerWidth < 1000 && window.innerWidth > 850) {
                clearInterval(timer);
                setTimeout(Panels, 400, panelnmis, panelnmis.clientWidth, 5, 5); 
            }
            if (counter >= 175&& window.innerWidth < 1000 && window.innerWidth > 700 && window.innerHeight > 700) {
                clearInterval(timer);
                setTimeout(Panels, 400, panelnmis, panelnmis.clientWidth, 5, 5); 
            }
            if (counter >= 80 && window.innerWidth < 850 && window.innerWidth > 635 && window.innerHeight < window.innerWidth) {
                clearInterval(timer);
                setTimeout(Panels, 400, panelnmis, panelnmis.clientWidth, 5, 5); 
            } 
            if (counter >= 60 && window.innerWidth < 635 && window.innerWidth > 500 && window.innerWidth > window.innerHeight) {
                clearInterval(timer);
                setTimeout(Panels, 400, panelnmis, panelnmis.clientWidth, 5, 5); 
            }
            if (counter >= 105 && window.innerWidth < 500 && window.innerWidth > 370) {
                clearInterval(timer);
                setTimeout(Panels, 400, panelnmis, panelnmis.clientWidth, 5, 5); 
            }
            if (counter >= 75 && window.innerWidth < 370 && window.innerWidth > 300) {
                clearInterval(timer);
                setTimeout(Panels, 400, panelnmis, panelnmis.clientWidth, 5, 5); 
            }
            if (counter >= 63 && window.innerWidth < 300) {
                clearInterval(timer);
                setTimeout(Panels, 400, panelnmis, panelnmis.clientWidth, 5, 5); 
            }
            if (counter >=58 && window.innerWidth < 500 && window.innerWidth > window.innerHeight) {
                clearInterval(timer);
                setTimeout(Panels, 400, panelnmis, panelnmis.clientWidth, 5, 5);             }
        }

        if (check == 5) {
            counter -= 5;
            leftnmis += 5;
            obj.style.left = leftnmis + 'px';
            obj.style.width = counter + 'px';
            document.getElementById('nmis').style.color = '#fff';
            if (counter <= 0) {
                clearInterval(timer);
            }
        }
    }, time);
}       