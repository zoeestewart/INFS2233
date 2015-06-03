//	The menu on the left
$(function() {
	$('nav#menu-left').mmenu();
});

function Newsletter(){
	setTimeout(alert("Thank you for signing up!"), 3000);
}

function contact(){
	alert('Thank you for your enquiry.');
	window.location.href =  "index.html";
	
}

function upLoad(){
	alert('please select a file to upload');
}

<!-- Shopping Cart Popover-->
$(function(){
	$("body .cartInfo").toggle(function(){
		$("#cartPopover").show();
		$("body .cartInfo").addClass('open');
	}, function(){
		$("#cartPopover").hide();
		$("body .cartInfo").removeClass('open');
	});
});


$(function() {
	$('#ei-slider').eislideshow({
		animation			: 'center',
		autoplay			: false,
		slideshow_interval	: 3000,
		titlesFactor		: 0
	});
});

function Searching(){
	window.location.href = "search.html";
}

<!-- scroll_top_btn -->
$(document).ready(function() {

	var defaults = {
		containerID: 'toTop', // fading element id
		containerHoverID: 'toTopHover', // fading element hover id
		scrollSpeed: 1200,
		easingType: 'linear' 
	};
	
	
	$().UItoTop({ easingType: 'easeOutQuart' });
	
});

jQuery(document).ready(function($) {
	$(".scroll").click(function(event){		
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top},1200);
	});
});


