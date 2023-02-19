function toggleMenu() {
	var x = document.getElementsByClassName("nav");
	if (x[0].className === "nav") {
		x[0].className += " responsive";
		
	} else {
		x[0].className = "nav"
	}
};