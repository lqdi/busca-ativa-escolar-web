angular
	.module('BuscaAtivaEscolar', [])
	.controller('TestCtrl', function ($scope) {
		$scope.string = "Hello world!";
	});
(function() {

	angular.module('BuscaAtivaEscolar').directive('appNavbar', function () {

		function init(scope, element, attrs) {
			scope.cityName = 'São Paulo';
		}

		return {
			link: init,
			templateUrl: 'navbar.html'
		};
	});

})();
//# sourceMappingURL=app.js.map
