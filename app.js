var app = angular.module('testApp', ['ngAnimate', 'ngAria', 'ngMaterial', 'ui.router']);
app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('home', {
			templateUrl: "poop.html",
			controller: "mainCtrl",
			url: '/'
		});
})