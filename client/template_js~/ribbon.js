Meteor.startup(function() {
	$('.announcements').live('mouseenter', function() {
		$('#ribbon').show().animate({
			opacity: 1,
			top: 0
		}, 200, 'easeOutExpo');
	});
	$('#ribbon').live('mouseleave', function() {
		$('#ribbon').animate({
			opacity: 0,
			top: -500
		}, 400, 'easeOutExpo', function() {
			$(this).hide();
		});
	});
	
	$('.tap, .order').live('mouseenter', function() {
		$('.tap').css('transform', 'rotate(10deg)');
	});
	$('.tap, .order').live('mouseleave', function() {
		$('.tap').css('transform', 'rotate(0deg)');
	});
	
});