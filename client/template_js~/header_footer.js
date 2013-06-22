Handlebars.registerHelper('active', function(page) {
  return Session.equals('page', page) ? 'active' : '';
});