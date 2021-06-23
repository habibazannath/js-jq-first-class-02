$(document).ready(function(){
	// alert("Hello SSB!");
	$('.first').click(function(){
		alert("Hello SSB!");
	});
	$('.custombtn').mouseover(function(){
		alert("Hello SSB!");
	});
$('#hide').click(function(){
	$('.message').hide('slow');
});
$('#show').click(function(){
	$('.message').show('slow');
});
$('#toggle').click(function(){
	$('.message').toggle('slow');
});
});
