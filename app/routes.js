/* jshint undef:true, unused:true, latedef:false, -W069 */
'use strict';

var app = angular.module('app', [
    'ngAnimate',
    'ngTouch',
    'ui.bootstrap',
    'ngRoute'
]);

angular.module('app')
.config(function($routeProvider) {
        'use strict';

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