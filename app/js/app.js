var app = angular.module('akatsky', ['ngResource','ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'partials/pages/homepage.html',
        controller: 'HomePageController'
    });
    $routeProvider.when('/forUs', {
        templateUrl: 'partials/pages/homepage.html',
        controller: 'HomePageController'
    });
    $routeProvider.when('/neWs', {
        templateUrl: 'partials/pages/homepage.html',
        controller: 'HomePageController'
    });
    $routeProvider.when('/videOs', {
        templateUrl: 'partials/pages/homepage.html',
        controller: 'HomePageController'
    });
    $routeProvider.when('/forUm', {
        templateUrl: 'partials/pages/homepage.html',
        controller: 'HomePageController'
    });
    $routeProvider.when('/contacTs', {
        templateUrl: 'partials/pages/homepage.html',
        controller: 'HomePageController'
    });

    $routeProvider.otherwise({
        redirectTo: '/'
    })

}]);

