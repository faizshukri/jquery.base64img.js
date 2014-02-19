(function( $ ){

    $.fn.base64img = function( options ){
        var settings = $.extend({
            //list default here
            result: '#result'
        }, options );

        if(typeof(settings.url) == 'undefined'){
            console.error('Url parameter not exist.');
            return;
        }

        var url = URL.createObjectURL( settings.url ),
            canvas = document.createElement('canvas'),
            ctx = canvas.getContext("2d"),
            img = new Image;

        var updateData = function(dataURL){
            $(settings.result).text(dataURL);
        }

        img.onload = function() {
            canvas.height = img.height;
            canvas.width = img.width;
            ctx.drawImage(img, 0, 0);
            var dataURL = canvas.toDataURL("image/jpeg");
            updateData(dataURL);
        }

        img.src = url;
        return this;
    }
}( jQuery ));
