VoyagerApp.controller('loginController', ['$scope', '$location',
	function loginController($scope, $location) {
	
	    $scope.click = function() {
	    	
	    	$location.path("/home");
	    };
	}
]);