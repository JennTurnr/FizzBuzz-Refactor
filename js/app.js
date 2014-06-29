$(document).ready(function (){

// alert
	$('input').click(function(){
	alert("Enter a number between 1 and 100");
	/*if (+'input' !== int) {
		alert("Please enter a number");
	}*/
});


function addEntry(event){
var entry = +$('#number-entry').val();
fizzBuzz(entry);
$('.output').append('<body>'+entry+'</body>');
$(+'#number-entry').val('');
event.preventDefault();
}


//function to take a number as an argument
var fizzBuzz = function(number) {
	for(i = 1; i <= 100; i+=1) {
		if(i % 3 === 0 && i % 5 === 0) {
			$('.output').append('<p>FizzBuzz</p>');
		} else if (i % 3 === 0) {
			$('.output').append('<p>Fizz</p>');
		} else if (i % 5 === 0) {
			$('.output').append('<p>Buzz</p>');
		} else {
			$('.output').append('<p>'+i+'</p>');
		}
	}
};

/* function isDecimal(n) {
	if (n === "")
		return false;
	var strCheck = "0123456789";
	var i;

	for (i in n) {
		if(strCheck.indexOf(n[i]) == -1)
			return false;
	}
	return true;
} */
//$(function() {
	//$(+'#number-entry').click(function(){
	//	alert("Enter a number between 1 and 100");
	//});


$(function (){
	$('form').on('submit', addEntry);
	document.forms["fizzBust"].reset();
});
}); 



	

