(function() {
	angular
		.module('BuscaAtivaEscolar')
		.service('AddAuthorizationHeadersInterceptor', function ($q, $rootScope, Identity) {

			this.request = function (config) {

				if(config.headers['X-Require-Auth'] !== 'auth-required') return config;

				return Identity.provideToken().then(function (access_token) {
					config.headers.Authorization = 'Bearer ' + access_token;
					return config;
				}, function (error) {
					console.error("[auth.interceptor] Token provider returned error: ", error);
					throw error;
				});

			};

			this.responseError = function (response) {

				if (response.status === 401) {
					$rootScope.$broadcast('unauthorized');
				}

				return response;
			};

		});

})();