/* jshint undef:true, unused:true, latedef:false */
/* global app */

app.controller('mainController', ['$scope', '$http', 'userFactory',
    function ($scope, $http, userFactory) {
        'use strict';

        $scope.results2 = userFactory;

    }
]);