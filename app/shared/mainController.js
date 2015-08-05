/* jshint undef:true, unused:true, latedef:false */
/* global app */

app.controller('mainController', ['$scope', '$http', 'userFactory',
    function ($scope, $http, userFactory) {
        'use strict';

        $scope.results2 = userFactory;

        // $scope.results1 = [];
        // $scope.results2 = [];

        // $http.get('https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=a5e95177da353f58113fd60296e1d250&user_id=132365033@N08&format=json&nojsoncallback=1')
        // .then(function(res1){
        //     $scope.data1 = res1.data.photos.photo;
        //     for (var i=0; i<11; i++) {
        //         var obj = {
        //             num: i,
        //             id: $scope.data1[i].id,
        //             title: $scope.data1[i].title,
        //             farm: $scope.data1[i].farm,
        //             secret: $scope.data1[i].secret,
        //             server: $scope.data1[i].server
        //         };
        //         $scope.results1.push(obj);
        //         var id = $scope.data1[i].id;
        //         var num = i;
        //         $scope.thing = getData(num, id);
        //     }
        // });

        // function getData(num, id) {
        //     $http.get('https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=a5e95177da353f58113fd60296e1d250&user_id=132365033@N08&format=json&nojsoncallback=1&photo_id='+ id)
        //     .then(function(res2){
        //         $scope.data2 = res2.data.photo;
        //         var obj = {
        //             num: $scope.results1[num].num,
        //             id: $scope.results1[num].id,
        //             title: $scope.results1[num].title,
        //             farm: $scope.results1[num].farm,
        //             secret: $scope.results1[num].secret,
        //             server: $scope.results1[num].server,
        //             views: $scope.data2.views
        //         };
        //         $scope.results2.push(obj);
        //     });
        // }

    }
]);