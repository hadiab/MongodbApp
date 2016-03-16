(function() {
	var app = angular.module('store', []);

	app.controller('AppController', function($scope, $http) {
		
		var refresh = function(){
			$http.get('/contactlist').success(function(response) {
				console.log("I get the data i requested");
				$scope.contactlist = response;
				$scope.contact = "";
			});
		};

		refresh();

		$scope.addContact = function() {
			console.log($scope.contact);
			$http.post('/contactlist', $scope.contact).success(function(response){
				console.log(response);
				refresh();
			});
		}


	});

})();
