app.controller('SliderController', ['$scope', function ($scope) {

    $(document).ready(function(){
        $('.bxslider').bxSlider({
            auto: true,
            autoControls: true,
            captions: true

        });
    });

}]);