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
							$scope.dataList=[{"name" : "KIM SANG WOO", "today": "하하하하하하하하!"}
							, {"name" : "LEE SEUNG HEE", "today": "다들 커피 쏘세요!"}
							, {"name" : "LEE DONG SEOK", "today": "오늘도 야근!"}
							, {"name" : "SHIN NA EUN", "today": "불금!"}
							, {"name" : "JUNG SANG UP", "today": "자전거로 출퇴근해야지!"}
							, {"name" : "MIN HACK JUN", "today": "이놈의 회의!"}
							, {"name" : "PARK HYUN JEONG", "today": "이놈의 회의 (2) !"}
							, {"name" : "CONAN", "today": "한우 먹어야지!"}
							, {"name" : "RANI", "today": "버츠비 짱짱!"}
							, {"name" : "JIMMY", "today": "감기 빠잉!"}							
							];
						}
		]						
);