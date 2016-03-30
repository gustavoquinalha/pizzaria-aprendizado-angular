var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider,$locationProvider){
	$routeProvider.when('/',{
		templateUrl: 'views/home.html',
		controller: 'homeController'
	})
	.when('/cardapio', {
		templateUrl: 'views/cardapio.html',
		controller: 'cardapioController'
	})
	.when('/pedido', {
		templateUrl: 'views/pedido.html',
		controller: 'cardapioController'
	})
	.when('/contato', {
		templateUrl: 'views/contato.html',
		controller: 'contatoController'
	});
});

app.controller('homeController', function($scope) {
	$scope.home = 'TESTE HOME';
});


app.controller('cardapioController', function($scope) {
	$scope.home = 'TESTE CARDAPIO';
});