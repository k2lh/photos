/* jshint undef:true, unused:true, latedef:false */
/* global app, getdatafunction */

app.factory('userFactory', ['$http',
    function($http) {
        'use strict';

        var factory = [],
            results1 = [],
            results2 = [];

        //will throw error b/c no promise; not as much of issue in prototype, def issue in prod
        $http.get('https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=a5e95177da353f58113fd60296e1d250&user_id=132365033@N08&format=json&nojsoncallback=1')
        .then(function(res1){
            var data1 = res1.data.photos.photo;
            // assuming pagination of 20 max photos on page, easier to just create new obj and track by assigned index
            // and then do call for anything additional... still a lot of calls, tho. in prod, would create proxy & cache, rather than
            // repeat 60+ calls for each page, ugh
            for (var i=0; i<21; i++) {
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
                // now with obj, do next round of calls for each id, keeping assigned num to track by
                // assigned num just gets around fact that promises = promises don't always come back in same order
                var getdatafunction = getData(num, id);
            }
        });

        function getData(num, id) {
            // in prod, probably run $q and hit proxy, in protoype, simple chaining is quicker
            // more readable, while working out what is most efficient for retrieving data
            $http.get('https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=a5e95177da353f58113fd60296e1d250&user_id=132365033@N08&format=json&nojsoncallback=1&photo_id='+ id)
            .then(function(res2){
                var data2 = res2.data.photo;
                var obj = {
                    views: data2.views,
                    date: data2.dateuploaded,
                    fave: data2.isfavorite,
                    username: data2.owner.username
                };
                results2.push(obj);

                return $http.get('https://api.flickr.com/services/rest/?method=flickr.photos.getExif&api_key=a5e95177da353f58113fd60296e1d250&user_id=132365033@N08&format=json&nojsoncallback=1&photo_id='+ id);
                }).then(function(res3){
                    var data3 = res3.data.photo;
                    var obj = {
                        num: results1[num].num,
                        id: results1[num].id,
                        title: results1[num].title,
                        farm: results1[num].farm,
                        secret: results1[num].secret,
                        server: results1[num].server,
                        info: results2[num],
                        camera: data3.camera,
                        addinfo: data3.exif
                    };
                    factory.push(obj);
                });

        }
        return factory;

}]);