(function( $ ){

    $.fn.base64img = function( options ){
        var settings = $.extend({
            //list default here

        }, options );


        $('#image').on('change', function(e){
                var url = URL.createObjectURL(e.target.files[0]),
                    canvas = document.createElement('canvas'),
                    ctx = canvas.getContext("2d"),
                    img = new Image;

                img.onload = function() {
                    canvas.height = img.height;
                    canvas.width = img.width;
                    ctx.drawImage(img, 0, 0);
                    var dataURL = canvas.toDataURL("image/jpeg");
                    updateData(dataURL);
                }

                img.src = url;
            });

        return this;
    }
}( jQuery ));
