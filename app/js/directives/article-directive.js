app.directive('article', function(){

    return{
        restrict: 'A',
        templateUrl: 'partials/directives/article.html',
        controller: 'CurrentArticleController'
    }
});