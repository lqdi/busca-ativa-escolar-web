(function() {
	angular
		.module('BuscaAtivaEscolar')
		.service('TrackPendingRequests', function ($q, $rootScope, API) {

			this.request = function (config) {

				if(config.data && config.data.$hide_loading_feedback) return config;

				API.pushRequest();

				return config;
			};

			this.response = function (response) {

				if(response.config && response.config.data && response.config.data.$hide_loading_feedback) return response;

				API.popRequest();

				return response;
			};

		});

})();