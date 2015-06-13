var app = angular.module('akatsky', ['ngResource','ngRoute','ui.router']);

app.constant('baseServiceURL', 'https://api.parse.com/1/');
app.constant('applicationId', 'CnBPycH9QIjp4vX4GOlGfK2a0gGy4xerVBowPZfk');
app.constant('restApiKEY', 'Ad8iKkyjUj4vcMktXzjDqiQlIk18YCLvubwD8tML');

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

    $routeProvider.when('/neWs/:newsId', {
        templateUrl: 'partials/pages/article.html',
        controller: 'CurrentArticleController'
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

    //$routeProvider.otherwise({
    //    redirectTo: '/'
    //})

}]);

