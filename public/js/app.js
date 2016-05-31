
	var app = angular.module('WebApp', [
		'ngRoute', 
		'ngSanitize'
	])
	.config(['$routeProvider', function($routeProvider){
	$routeProvider.otherwise({redirectTo:'/list'});	
	$routeProvider.
		when('/list', {
			templateUrl: '/js/views/list-items.html',
			controller: 'ListItems'
		});
	}]);	

