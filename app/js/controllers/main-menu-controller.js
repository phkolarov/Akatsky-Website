app.controller('MainMenuController', ['$scope', '$routeParams', '$route',function ($scope, $routeParams,$route) {


    switch ($route.current.$$route.originalPath){
        case '/':
            $scope.activeHome = 'active';
            break;
        case '/forUs':
            $scope.activeForUs = 'active';
            break;
        case '/neWs':
            $scope.activeNews = 'active';
            break;
        case '/videOs':
            $scope.activeVideos = 'active';
            break;
        case '/forUm':
            $scope.activeForum = 'active';
            break;
        case '/contacTs':
            $scope.activeContacts = 'active';
            break;
    }






}]);