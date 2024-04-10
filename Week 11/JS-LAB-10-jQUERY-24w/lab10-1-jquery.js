//LAB 10 - 1 FAQ PAGE

//Use jQuery to wait for page load

$(window).on('load', function(){
	

	//Inside of here is your jQuery/JavaScript
	$('p').hide();
	$('p').addClass('contentBox');

	//ADD CLICK EVENT TO <h2>
	$('h2').on('click', function(){
		$('p').slideUp(3000);
		$(this).next('p').slideToggle(3000);
	})
	
	
	
	//CHANGE <p> BACKGROUND COLOUR ON HOVER
	$('p').hover(function(){$(this).toggleClass('textHovered')});



})
