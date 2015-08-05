'use strict';

angular
    .module('app')
    .factory('userFactory', ['$http', function($http) {

        var factory = [];

        var results1 = [];


        $http.get('https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=a5e95177da353f58113fd60296e1d250&user_id=132365033@N08&format=json&nojsoncallback=1')
        .then(function(res1){
            var data1 = res1.data.photos.photo;
            for (var i=0; i<11; i++) {
                var obj = {
                    num: i,
                    id: data1[i].id,
                    title: data1[i].title,
                    farm: data1[i].farm,
                    secret: data1[i].secret,
                    server: data1[i].server
                };
                results1.push(obj);
                var id = data1[i].id;
                var num = i;
                var thing = getData(num, id);
            }
        });

        function getData(num, id) {
            $http.get('https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=a5e95177da353f58113fd60296e1d250&user_id=132365033@N08&format=json&nojsoncallback=1&photo_id='+ id)
            .then(function(res2){
                var data2 = res2.data.photo;
                var obj = {
                    num: results1[num].num,
                    id: results1[num].id,
                    title: results1[num].title,
                    farm: results1[num].farm,
                    secret: results1[num].secret,
                    server: results1[num].server,
                    views: data2.views
                };
                factory.push(obj);
            });
        }


        return factory;

}]);