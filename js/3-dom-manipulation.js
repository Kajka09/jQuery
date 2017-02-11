//Funkcja document.ready() - wersja pełna
jQuery(document).ready(function(){
	'use strict';
//	Pobieranie tekstu
	var tekstParagrafuPierwszego = $('#paragraf').text();
	console.log(tekstParagrafuPierwszego);
	
//	Dodawanie tekstu
	$(".paragraf").text(tekstParagrafuPierwszego);
	
//	Dodawanie HTML
	$(".paragrafnext").html("To jest <strong>paragraf</strong> z dodanym <br> HTML ");
	
//	Dodawanie treści na końcu selektora
	$(".paragrafnext").append("Treść na końcu selektora");
	
//	Dodawanie treści za selektorem
	$(".paragrafnext").after("Treść za selektorem");
	
//	Usuwanie elementu i jego zawartości
	$("strong").remove();
	
//	Usuwanie TYLKO zawartości elementu
	$(".paragraf").empty();
	
//	Dodawanie CSS
	$(".paragrafnext").css({'font-size':'3em', 'color':'red'});
	
//	Dodawanie klasy
	$('h1').addClass('blue');
	
//	Dodawanie atrybutu
	$('h1').attr("imie", "Marcin");
})