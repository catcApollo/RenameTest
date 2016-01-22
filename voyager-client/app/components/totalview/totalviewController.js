VoyagerApp.config(['$stateProvider', 
    function($stateProvider) {

        // Application routes
        $stateProvider
            .state('home.totalview', {
                url: '/totalview',
                templateProvider: function($templateCache){                	
                    return $templateCache.get('totalview/totalview.tpl.html'); // returns undefined
                }
            })
	}
]);


VoyagerApp.controller('totalviewController', 
		['$scope',
						function totalviewController($scope) {
							$scope.dataList=[{"name" : "KIM SANG WOO"}
							, {"name" : "LEE SEUNG HEE"}]
							} ]);