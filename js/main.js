// JavaScript Document

(function(){
	"use strict";
		
	console.log("fired");

	const button = document.querySelector("#button");
	const burgerCon = document.querySelector("#burgerCon");


	function hamburgerMenu() {
		button.classList.toggle("expanded");
		burgerCon.classList.toggle("slideToggle");
	}

	button.addEventListener("click", hamburgerMenu);


})();