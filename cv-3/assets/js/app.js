	/* barra menu opcion 2 */

	window.onscroll = function() {headereffect()};


	function headereffect() {
		if(document.documentElement.scrollTop > 0){
			//agregando class a id master cuando hace la accion.
			document.getElementById("master").className = "abajo"; 
			//agregando stilo negro al elemento span con la clase "line1__bars-menu"  cuando hace la accion.
			document.querySelector("span.line1__bars-menu").style.backgroundColor = "black";
			//agregando stilo negro al elemento span con la clase "line2__bars-menu"  cuando hace la accion.
			document.querySelector("span.line2__bars-menu").style.backgroundColor = "black";
			//agregando stilo negro al elemento span con la clase "line3__bars-menu"  cuando hace la accion.
			document.querySelector("span.line3__bars-menu").style.backgroundColor = "black";
			
		}else {
			//quitando class a id master cuando hace la accion.
			document.getElementById("master").className = "";	
			//quitando stilo negro al elemento span con la clase "line1__bars-menu"  cuando hace la accion.	
			document.querySelector("span.line1__bars-menu").style.backgroundColor = "";
			//quitando stilo negro al elemento span con la clase "line2__bars-menu"  cuando hace la accion.
			document.querySelector("span.line2__bars-menu").style.backgroundColor = "";
			//quitando stilo negro al elemento span con la clase "line3__bars-menu"  cuando hace la accion.
			document.querySelector("span.line3__bars-menu").style.backgroundColor = "";
		}

	}

	/* terminar barra de nav */

	/* menu desplegable para phone */

	var line1__bars = document.querySelector(".line1__bars-menu");
	var line2__bars = document.querySelector(".line2__bars-menu");
	var line3__bars = document.querySelector(".line3__bars-menu");
	var nav__menu = document.querySelector(".nav_menu");

	
	const barsline = document.getElementById("bars__menu");
	barsline.addEventListener("click", barscheck);
	//element.addEventListener("click", mySecondFunction);
	
	function barscheck() {
		line1__bars.classList.toggle("activeline1__bars-menu");
		line2__bars.classList.toggle("activeline2__bars-menu");
		line3__bars.classList.toggle("activeline3__bars-menu");
		nav__menu.classList.toggle("active__nav-menu");
		
	}


