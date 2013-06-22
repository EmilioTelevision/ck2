
changeBlinds = function() {
	console.log('changing blinds');
	

	var halfHeight = $(window).height() / 2 - 286/2 + 30;
	
	closeBlinds(halfHeight);
	
	setTimeout(function() {
		openBlinds(halfHeight);
		$('#main_content').hide();
		setTimeout(function() {
			$('#main_content').fadeIn('slow');
		}, 275);
	}, 510);
}

closeBlinds = function(halfHeight) {
	$('.social, .announcements, .nav, #footer_links').fadeOut('fast');
	
	$('#ribbon').animate({
		opacity: 0,
		top: -500
	}, 300, 'easeOutExpo', function() {
		$(this).hide();
	});
	
	
	$('#header_wrap').animate({
	    top: '+='+halfHeight
	}, 300, 'easeOutExpo');
	$('#footer_wrap').animate({
	    bottom: '+='+halfHeight
	}, 300, 'easeOutExpo');
	
	$('#chomper_top').animate({
		top: '+='+halfHeight
	}, 300, 'easeOutExpo');
	$('#chomper_bottom').animate({
		bottom: '+='+halfHeight
	}, 300, 'easeOutExpo');
};

openBlinds = function(halfHeight) {
	
	
	$('#header_wrap').animate({
	    top: '-='+halfHeight
	}, 400, 'easeInExpo');
	$('#footer_wrap').animate({
	    bottom: '-='+halfHeight
	}, 400, 'easeInExpo');
	
	$('#chomper_top').animate({
		top: '-='+halfHeight
	}, 400, 'easeInExpo');
	$('#chomper_bottom').animate({
		bottom: '-='+halfHeight
	}, 400, 'easeInExpo', function() {
		$('.social, .announcements, .nav, #footer_links').fadeIn('slow');
	});
};