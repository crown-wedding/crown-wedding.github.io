function get (id) {
	return document.getElementById(id);
}

window.onscroll = function () {
if(document.body.scrollTop > 100)
 	get("scroll").style.opacity = "1";
else if(document.body.scrollTop < 100)
	get("scroll").style.opacity = "0";
}

var z = 0,
	o = 0,
	menuHeight = get("rightMenu").clientHeight;

get("menuIcon").onclick = function () {
	if(z == 0) {
		get("rightMenu").style.display = "block";
		z = 1;
	}else if(z == 1) {
		get("rightMenu").style.display = "none";
		z = 0;
	}
}

var menu = get("rightMenu").getElementsByTagName("a"),
	bodyWidth = document.body.clientWidth,
	scrollY = 0,
	scrollInterval = 0;

if (bodyWidth <= 767) {
	get("rightMenu").onclick = function () {
		get("rightMenu").style.display = "none";
		z = 0;
	}
}

get("scroll").onclick = function () {
	scrollY = document.body.scrollTop,
	scrollInterval = setInterval(function () {
		scrollY -= 20;
		document.body.scrollTop = scrollY;
		if (scrollY <= 0) clearInterval(scrollInterval);
	},1)
}
var aboutScroll = 0,
	slideScroll = 0,
	contactScroll = 0;
	
	if (bodyWidth > 1200) { 
		aboutScroll = 980;
		slideScroll = 1900;
		contactScroll = 2820;
 	} else if (bodyWidth > 992 && bodyWidth <= 1200){
 		aboutScroll = 980;
		slideScroll = 1720;
		contactScroll = 2540;
 	} else if (bodyWidth > 767 && bodyWidth <= 992){
 		aboutScroll = 510;
		slideScroll = 1260;
		contactScroll = 2000;
 	} else if (bodyWidth > 480 && bodyWidth <= 767){
 		aboutScroll = 510;
		slideScroll = 1700;
		contactScroll = 2160;
 	} else if (bodyWidth > 320 && bodyWidth <= 480){
 		aboutScroll = 510;
		slideScroll = 1590;
		contactScroll = 1740;
 	} else if (bodyWidth <= 320){
 		aboutScroll = 340;
		slideScroll = 1340;
		contactScroll = 1600;
 	}

menu[1].onclick = function () {
	scrollY = 0;
	scrollInterval = setInterval(function() {
		scrollY += 5;
		if(scrollY == aboutScroll) clearInterval(scrollInterval); 
		window.scrollTo(0, scrollY);				
	}, 1)
}
menu[2].onclick = function () {
	scrollY = 0;
	scrollInterval = setInterval(function() {
		scrollY += 10;
		if(scrollY == slideScroll) clearInterval(scrollInterval);
		window.scrollTo(0, scrollY);				
	}, 1)
}
menu[3].onclick = function () {
	scrollY = 0;
	scrollInterval = setInterval(function() {
		scrollY += 20;
		if(scrollY == contactScroll) clearInterval(scrollInterval);
		window.scrollTo(0, scrollY);				
	}, 1)
}

var	itemImg = document.getElementsByClassName("item-content-tablets"),
	text = ["ԱԿՑԻԱ 30.000 դրամ (վարձույթ)","ԱԿՑԻԱ 40.000 դրամ (վարձույթ)","ԱԿՑԻԱ 50.000 դրամ (վարձույթ)"],
	x = 1,
	y = 0;

function slide () {
	if((x >= 1 && x <= 3) || (x >= 6 && x <= 12) || (x >= 15 && x <= 16) || x == 22)
		y = 0;

	if((x >= 4 && x <= 5) || (x >= 13 && x <= 14) || (x >= 23 && x <= 24))
		y = 1;

	if(x >= 17 && x <= 21)
		y = 2;

	get("slide").style.backgroundImage = "url(img/slide" + x + ".jpg)";
	get("price").innerHTML = text[y];
}

itemImg[0].onclick = function () {
	x = 23;
	slide();
}
itemImg[1].onclick = function () {
	x = 17;
	slide();
}
itemImg[2].onclick = function () {
	x = 10;
	slide();
}

get("next").onclick = function () {
	x++;
	if(x == 25)
		x = 1;
	
	slide ();
}

get("prev").onclick = function () {
	x--;
	
	if(x == 0)
		x = 24;
	
	slide ();
}