/* jshint undef:true, unused:true, latedef:false */
/* global app */

app.controller('homeController', ['$scope',
    function($scope){
        'use strict';

        // not introducing additional filter/orderby, mostly b/c of time crunch
        // angular can get picky when it comes to some things, ugh
        // $scope.order('-title',false);
        // $scope.order = function(predicate, reverse) {
        //     $scope.results2 = orderBy($scope.results2, predicate, reverse);
        // };

    }
]);