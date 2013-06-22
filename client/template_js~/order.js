Template.contact.events({
	'click .submit-button': function(event) {
		
		var info = {
			name: $('#contact_name').val(),
			city: $('#contact_city').val(),
			email: $('#contact_email').val(),
			venue: $('#contact_bar').val(),
			message: $('#contact_message').val()		
		};
		
		Meteor.call('emailMe', info);
		
		console.log('emailMe', info);

		$('#contact_wrap').html('').html('<h1 style="text-align:center;margin-top:380px;"><b>Thank You. Check Your Email.</b></h1>');
		
		return false;
	}
});