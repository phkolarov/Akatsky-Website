app.controller('HomePageNewsController', ['$scope','siteData', '$timeout','baseThumbnail', 'videoThumbail',function ($scope,siteData,$timeout,baseThumbnail,videoThumbail) {


        $scope.spiner=true;
        $scope.ss = 'ядтяяд'



        siteData.newsData()
                .$promise
                .then(function (data) {


                var arr = data.results;
                    $timeout(function(){
                        $scope.spiner=false;

                        arr = _.sortBy(arr,'createdAt').reverse();
                        if(arr.length > 10){

                            arr = arr.slice(0,10);
                        }
                        $scope.news = arr;
                    }, 0000);

                }, function (error) {
                    console.log(error)
                },function(){
                    console.log('pendvam')
                });


            siteData.videosData()
                .$promise
                .then(function (data) {
                    console.log(data)

                    var videoThumbnailArr = [];
                    var title,objectId,link,createdAt;

                    for(var i in data.results){


                        title = data.results[i].title;
                        objectId = data.results[i].objectId;
                        link = data.results[i].link;
                        createdAt = data.results[i].createdAt;

                       var obj = videoThumbail.makeVideoThumbnail(title,objectId,link,createdAt);

                        if(obj){
                            videoThumbnailArr.push(obj);
                        }
                    }

                    videoThumbnailArr =_.sortBy(videoThumbnailArr,'createdAt').reverse();
                    if(videoThumbnailArr.length <= 10){
                        console.log(videoThumbnailArr.length);
                        $scope.latestVideos = videoThumbnailArr;
                    }else{
                       videoThumbnailArr = videoThumbnailArr.slice(0,10);
                        console.log(videoThumbnailArr);

                        $scope.latestVideos = videoThumbnailArr;
                    }


                }, function (error) {
                    console.log(error)
                });


        $scope.search = function () {

            var c = $scope.news[0];
            console.log($scope.news[0]);
            $scope.news = {};
            $scope.news[0] = c;

        }


    function makeVideoThumbnail(title, objectId,link){

        if(title, objectId,link){
            var obj = {};
            var video =  link.match(/^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/)

            if(video[1]){
                obj['link'] = "http://img.youtube.com/vi/"+ video[1] + "/default.jpg";
                obj['title'] = title;
                obj['objectId'] = objectId;
            }else{
                obj['link'] = baseThumbnail;
                obj['title'] = 'Unavaliable Video';
                obj['objectId'] = '#/';
            }
        }
    }



}]);