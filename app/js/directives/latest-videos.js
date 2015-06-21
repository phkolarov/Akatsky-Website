app.directive('latest', function(){
    return{
        restrict: 'A',
        templateUrl: 'partials/directives/latest-videos-box.html',
        controller: 'latestVideosController'
    }
});