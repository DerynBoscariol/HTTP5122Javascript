//LAB 10 - 2 INVENTORY PAGE
$(window).on('load', function(){
	$('.desc').hide();




	//ADD <tr> MOUSEOVER and MOUSEOUT FUNCTIONS 
	$('tr').hover(
		function(){$(this).toggleClass('selected');});




	//ADD <tr> CLICK LISTENER 
	$('tr').on('click',function(){
						$('.desc').hide();
						$(this).find('.desc').show();});

})