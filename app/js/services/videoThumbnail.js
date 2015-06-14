app.factory('videoThumbail', ['baseThumbnail',function (baseThumbnail) {


    function makeVideoThumbnail(title, objectId,link,createdAt){

        if(title, objectId,link,createdAt){
            var obj = {};
            var video =  link.match(/^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/)

            if(video[1]){
                obj['thumbail'] = "http://img.youtube.com/vi/"+ video[1] + "/default.jpg";
                obj['title'] = title || 'Unknown Title';
                obj['objectId'] = objectId || '#/';
                obj['createdAt'] = createdAt;
            }else{
                obj['thumbail'] = baseThumbnail;
                obj['title'] = 'Unavaliable Video';
                obj['objectId'] = '#/';
                obj['createdAt'] = createdAt;
            }
            return obj;
        }
    }



    return {
        makeVideoThumbnail:makeVideoThumbnail
    };

}]);