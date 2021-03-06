angular.module('alurapic')
	.factory('tokenInterceptor', function($window, $q, $location){
		var interceptor = {};

		interceptor.response = function(response){
			console.log("Recebi resposta!");

			var token = response.headers('x-access-token');
			if (token) {
				//window.sessionStorage
				//$window.localStorage
				console.log("Armazenando token recebido no sessionStorage do navegador!");
				$window.sessionStorage.token = token;
			}
			return response;
		};

		interceptor.request = function(config){
			config.headers = config.headers || {};
			if($window.sessionStorage.token){
				config.headers['x-access-token'] = $window.sessionStorage.token;
				console.log("Adicionando token no header da requisição para ser enviado!");
			}
			return config;
		};

		interceptor.responseError = function(rejection){
			if(rejection != null && rejection.status == 401){
				//redirect para partial login
				delete $window.sessionStorage.token;
				$location.path('/login');
			}
			return $q.reject(rejection);
		};


		return interceptor;
	});