pageLoaded = false;

Meteor.Router.add({
	'/': function() {
		Session.set('page', 'home');
		
		if(pageLoaded) changeBlinds();
		else startPage();
		
		pageLoaded = true;
		
		$('#footer a, .nav a').removeClass('active');
		
		
		return 'page_home';
	},
	'/:page': function(page) {
		Session.set('page', page);
		
		if(pageLoaded) changeBlinds();
		else startPage();
		
		if(page == 'order') {
			setTimeout(function() {
				//$('html,body').animate({scrollTop: $('#contact_wrap').offset().top - 180}, 600, 'easeInBack');
			}, 200);
			$('html,body').animate({scrollTop: 0}, 0, 'easeOutExpo');
		}
		else {
			$('html,body').animate({scrollTop: 0}, 0, 'easeOutExpo');
		}
		
		pageLoaded = true;
		
		
		//add active classes in jquery since footer and header are #constant
		$('#footer a, .nav a').removeClass('active');
		$('#footer a[href="/'+page+'"], .nav a[href="/'+page+'"]').addClass('active');
		
		return 'page_'+page;
	},
});

startPage = function() {
	setTimeout(function() {
		$('#main_content').fadeIn('slow');
	}, 100);
};