app.directive('mainMenu', function () {
    return{
        restrict: 'A',
        templateUrl: 'partials/directives/main-menu.html',
        controller: 'MainMenuController'
    }
});