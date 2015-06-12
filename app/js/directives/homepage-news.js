app.directive('homeNews', function () {
    return {
        restrict: 'A',
        templateUrl: 'partials/directives/homepage-news.html',
        controller: 'HomePageNewsController'
    }
});