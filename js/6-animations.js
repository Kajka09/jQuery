$(function(){
'use strict';
	
//	Efekt hide show
	var flaga = false;
	
	$("p").hide(3000, function(){
		if (flaga == false) {
		console.log("zakończono ukrywanie")
		flaga = true;
		}
	}).show(4000);

	
//	Efekt fadeIn fadeOut
	$("h1").fadeOut(2000).fadeIn(3000);
	
//	Efekt slideUp slideDown
	$("h2").slideUp(3000).slideDown(3000);
	
	
//	Funkcja zwrotna animacji tzw. callback
	function animacja () {
		console.log("Zakończono pierwsza animację, startuje druga");
		$("h3").animate({"font-size":"1em", "margin-left":"0px"}, 2000);
	}
	
//	Efekt animacji z funkcją zwrotną animacja
	$("h3").click(function(){
		$("h3").animate ({"font-size":"3em", "margin-left":"100px"}, 2000, animacja);
	});
	
});
	