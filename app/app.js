/* jshint undef:true, unused:true, latedef:false, -W069 */
'use strict';

var app = angular.module('app', [
    'ngAnimate',
    'ngTouch',
    'ui.bootstrap',
    'ngRoute'
]);

app.config(function($routeProvider) {

        $routeProvider

            .when('/', {
                templateUrl: 'home/home.html',
                controller: 'homeController'
            })

            .when('/home', {
                templateUrl: 'home/home.html',
                controller: 'homeController'
            })

            .otherwise({
                redirectTo: '/home'
            });

});