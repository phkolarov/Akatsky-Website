app.controller( 'latestVideosController', ['$scope','siteData', '$timeout','baseThumbnail', 'videoThumbail',function ($scope,siteData,$timeout,baseThumbnail,videoThumbail){

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

}]);