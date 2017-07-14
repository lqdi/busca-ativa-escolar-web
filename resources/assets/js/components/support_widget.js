(function() {

	angular.module('BuscaAtivaEscolar').directive('appSupportWidget', function (Modals) {

		function init(scope, element, attrs) {
			scope.createNewTicket = function() {
				Modals.show(Modals.NewSupportTicketModal());
			}
		}

		return {
			link: init,
			replace: true,
			templateUrl: '/views/components/support_widget.html'
		};
	});

})();