//Funkcja document.ready() - wersja skrócona

$(function(){
	'use strict';
	
//	Wybieranie elementu z kolekcji za pomoca metody eq()
	$("body").find("p").eq(1).css({"color":"green"});
	
//	Pętla each dodająca do paragrafów klasę z kolejnym numerem
	$("p").each(function(index) {
		$(this).addClass("paragraf-" + index);
		console.log(jQuery(this));
	});
});