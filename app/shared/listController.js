/* jshint undef:true, unused:true, latedef:false */
/* global app */

app.controller('listController', ['$scope', '$route', '$location',
    function($scope, $route, $location){

        $scope.categories = [
            {
                "id": 0,
                "name": "all"
            },
            {
                "id": 1,
                "name": "phone"
            },
            {
                "id": 2,
                "name": "food"
            },
            {
                "id": 3,
                "name": "vehicule"
            }
        ];

        $scope.sendCategory = function(category) {
            $scope.search =category.name;
        };

        $scope.orderProp='date';
        $scope.tab = function (tabIndex) {
            if (tabIndex == 1){
                $scope.orderProp='date';
            }
            if (tabIndex == 2){
                $scope.orderProp = 'views';
            }
        };

        $scope.sort = function(item) {
            if (  $scope.orderProp == 'date') {
                return new Date(item.date);
            }
            return item[$scope.orderProp];
        }

    }
]);