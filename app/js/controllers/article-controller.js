app.controller('CurrentArticleController', ['$scope','$translate','siteData','$location', '$routeParams','$locale',function ($scope,$translate,siteData,$location,$routeParams,$locale) {



    $scope.jsTrSimple = $translate.instant('TIfgfgT');
    $translate.use('bg-BG');

    //console.log(base64.encode($scope.newsHeader))
    var newsId = $routeParams.newsId;
    //$scope.route = $route.current.originalPath;
    //console.log($route  )

    siteData.getCurrentArticle(newsId)
        .$promise
        .then(function (data) {

            $scope.article = {}

            console.log(data);

            $scope.article['title'] = data.title;
            $scope.article['image'] = data.picture;
            $scope.article['text'] = data.newsData;
            $scope.article['title'] = data.title;
            $scope.article['date'] = data.createdAt;

        }, function (error) {
            console.log(error)
        })


}]);