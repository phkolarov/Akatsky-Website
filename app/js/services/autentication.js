app.factory('autentication', ['$http','applicationId','restApiKEY',function ($http,applicationId,restApiKEY) {


    function setHeaders(){
        $http.defaults.headers.common['X-Parse-Application-Id'] = applicationId;
        $http.defaults.headers.common['X-Parse-REST-API-Key'] = restApiKEY;

    }


    return{
        setHeaders:setHeaders
    }

}]);