app.controller('HomePageNewsController', ['$scope','siteData', '$timeout',function ($scope,siteData,$timeout) {


        $scope.spiner=true;



        siteData.newsData()
                .$promise
                .then(function (data) {

                    console.log(data.results);

                var arr = data.results;
                    $timeout(function(){
                        $scope.spiner=false;
                        $scope.news = arr;
                    }, 0000);

                }, function (error) {
                    console.log(error)
                },function(){
                    console.log('pendvam')
                })








}]);