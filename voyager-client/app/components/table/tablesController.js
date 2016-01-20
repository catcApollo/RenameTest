VoyagerApp.controller('tablesController', ['$scope', '$http', 
    function tablesController($scope, $http) {
	
    	$scope.test ="Test";
	
    	$scope.testClick = function(){
			
			var testUrl ='http://localhost:3000/rest';
	       	$http({
			    method: 'POST',
			    url: testUrl,
		        data: {"name" : "KIM SANG WOO", "address" : "Samsung SDS"},
		        headers: { 'Content-Type': 'application/x-www-form-urlencoded'}
		         
	       	}).success(function(data, status, headers, config) {
	       		
	       		console.log(data);
	       		
	       		$scope.test = data.result; 
	
	       	}).error(function(data, status, headers, config) {
	
	       	});	  
		}		
	}    
]);