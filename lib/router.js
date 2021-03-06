// set main template
Router.configure({
  layoutTemplate: 'layout'
});

// check if user is logged in
Router.route('/', function() {
  if (Meteor.user()) {
    Router.go('/menu');
  } else {
    this.render('index');
  }
});

// handle routing for each view
Router.route('/menu', function(){
  this.render('menu');
});

Router.route('/games/create', function(){
  this.render('create');
});

Router.route('/games', function() {
  this.render('allGames');
});

Router.route('/game', function(){
  this.render('game');
});

Router.route('/photos', function(){
  this.render('photos');
});

Router.route('/profile', function(){
  this.render('profile');
});

Router.route('/contestPhotos', function(){
  this.render('contestPhotos');
});

Router.route('/messages', function(){
  this.render('messages');
});

Router.route('/friends', function() {
  this.render('friends');
});

Router.route('/userPhotos', function() {
  this.render('userPhotos');
});

Router.route('/topPhotos', function(){
  this.render('topPhotos');
});

Router.route('/leaders', function(){
  this.render('leaders');
});

Router.route('/team', function(){
  this.render('team');
});

// default route for invalid URL
Router.route(/\S+/i, function() {
  Router.go('/');
});
