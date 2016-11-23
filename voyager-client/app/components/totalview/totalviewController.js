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
							$scope.dataList=[
							                 {"name" : "KIM SANG WOO", "today": "하하하하하하하하!",  "todayStndDate" : "2016-01-22 09:01"
							                	 , "dataMessageList" : [{"message" : "야근하지마!", "messageKey":"sw1", "messageShowYn":"Y", "messageStndDate" : "2016-01-22 11:37"},{"message" : "으하하하하!", "messageKey":"sw2", "messageShowYn":"Y", "messageStndDate" : "2016-01-21 17:10"}]}
											, {"name" : "LEE SEUNG HEE", "today": "다들 커피 쏘세요!",  "todayStndDate" : "2016-01-22 09:12"}
											, {"name" : "LEE DONG SEOK", "today": "오늘도 야근!",  "todayStndDate" : "2016-01-22 08:32"}
											, {"name" : "SHIN NA EUN", "today": "불금!",  "todayStndDate" : "2016-01-22 08:48"}
											, {"name" : "JUNG SANG UP", "today": "자전거로 출퇴근해야지!",  "todayStndDate" : "2016-01-22 09:34"}
											, {"name" : "MIN HACK JUN", "today": "이놈의 회의!",  "todayStndDate" : "2016-01-22 09:57"}
											, {"name" : "PARK HYUN JEONG", "today": "이놈의 회의 (2) !",  "todayStndDate" : "2016-01-22 08:11"}
											, {"name" : "CONAN", "today": "한우 먹어야지!",  "todayStndDate" : "2016-01-22 08:43"}
											, {"name" : "RANI", "today": "버츠비 짱짱!",  "todayStndDate" : "2016-01-22 10:32"}
											, {"name" : "JIMMY", "today": "감기 빠잉!",  "todayStndDate" : "2016-01-22 11:40"}							
											];
							
							
							$scope.deleteMessage = function(messageKey){
								
								angular.forEach($scope.dataList, function(data){
									angular.forEach(data.dataMessageList, function(data){
										if(data.messageKey == messageKey){
											data.messageShowYn = "N";
										}
									})									
									
								});								
								
							}
						}
		]						
);