app.factory('siteData', ['$resource','$http', 'baseServiceURL','autentication', function ($resource,$http,baseServiceURL,autentication) {



    autentication.setHeaders();

    function newsData (){
        var url = baseServiceURL+ 'classes/news' ;
        var resource = $resource(url);


        return resource.get();
    }



    function videosData(){

        var url = baseServiceURL+ 'classes/videos' ;
        var resource = $resource(url);

        return resource.get();
    }


    return{
        newsData: newsData,
        videosData: videosData
    }

}]);