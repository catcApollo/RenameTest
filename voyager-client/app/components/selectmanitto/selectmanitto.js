VoyagerApp.config(['$stateProvider', 
    function($stateProvider) {

        // Application routes
        $stateProvider
            .state('home.selectmanitto', {
                url: '/selectmanitto',
                templateProvider: function($templateCache){                	
                    return $templateCache.get('selectmanitto/selectmanitto.tpl.html'); // returns undefined
                }
            })
	}
]);


VoyagerApp.controller('selectmanittoController', 
		['$scope',
						function selectmanittoController($scope) {
							$scope.dataList=[
							                  {"name" : "MATTHEW", "code": "0", "selected" : "N", "done" : "N"}
											, {"name" : "ANNA", "code": "1", "selected" : "N", "done" : "N"}
											, {"name" : "DONI", "code": "2", "selected" : "N", "done" : "N"}
											, {"name" : "NADIA", "code": "3", "selected" : "N", "done" : "N"}
											, {"name" : "BRIAN", "code": "4", "selected" : "N", "done" : "N"}
											, {"name" : "NOTCH", "code": "5","selected" : "N", "done" : "N"}
											, {"name" : "FRANCESCA", "code": "6","selected" : "N", "done" : "N"}
											, {"name" : "CONAN", "code": "7","selected" : "N", "done" : "N"}
											, {"name" : "RANI", "code": "8","selected" : "N", "done" : "N"}
											, {"name" : "JIMMY", "code": "9","selected" : "N", "done" : "N"}
											];
							
							var tmpCnt = 0;					
							
							$scope.selectManitto = function(code){
								if(code !== undefined && code !== null){
									if($scope.dataList[parseInt(code)].done == "N"){
										$scope.dataList[parseInt(code)].done = "Y";										
										
										var tmpList = [];
										angular.forEach($scope.dataList, function(data){										
											if(data.selected == "N" && data.code !== code){
												tmpList.push(data);
											}										
										});									
										
										var randomNum = Math.floor(Math.random() * (tmpList.length));
										
										var tmpData = tmpList[randomNum];									
										
										angular.forEach($scope.dataList, function(data){
											if(data.code == tmpData.code){
												data.selected = "Y";
											}
										});
										
										alert("당신의 마니또 이름은 " + tmpData.name + "입니다.");
										
									}else{
										alert("이미 선택했습니다.");
									}
								}																
							}
						}
		]						
);