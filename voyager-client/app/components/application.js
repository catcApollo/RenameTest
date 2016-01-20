var VoyagerApp = angular.module('voygerclient', ['ui.bootstrap', 'ui.router', 'ngCookies', 'app.templates']);

'use strict';

VoyagerApp.config(['$stateProvider', '$urlRouterProvider', 
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/login');
        
        // Application routes
        $stateProvider
            .state('login', {
                url: '/login',
                templateProvider: function($templateCache){                	
                    return $templateCache.get('login/login.tpl.html'); // returns undefined
                }
            })
            .state('home', {
                url: '/home',
                templateProvider: function($templateCache){
                    return $templateCache.get('home/home.tpl.html'); // returns undefined
                }
            })
            .state('home.dashboard', {
                url: '/dashboard',
                templateProvider: function($templateCache){
                    return $templateCache.get('dashboard/dashboard.tpl.html'); // returns undefined
                }                
            })
            .state('home.tables', {
                url: '/tables',
                templateProvider: function($templateCache){
                    return $templateCache.get('table/tables.tpl.html'); // returns undefined
                }                
            });
    }
]);