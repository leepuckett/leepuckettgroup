
/**********************************************
 light box allows users to zoom in on song list
 **********************************************/

var lb = {
         
    init: function() {
        $('body').append('<div class="lightBoxOverlay"></div>');
        $('.gallery a').on('click', lb.lightBox);
        $('body').on('click', '.closeBox, .lightBoxOverlay', lb.clickClose);
        $(document).on('keydown', lb.closeBox);
    },
     
    keyCheck: function(e){
        if (e.keyCode === 27){
            e.preventDefault();
            main.email.closeModal();
        }
    },
  
    clickClose: function(e){
        e.preventDefault();
        lb.closeBox();
    },
     
    closeBox: function() {
        $('.lightBox').fadeOut();
        $('.lightBoxOverlay').fadeOut(500, function() {
            $('.lightBox').remove()
        });
    },
     
    lightBox: function(e) {
        e.preventDefault();
        $('.lightBoxOverlay').fadeIn();
                     
        var $img = $('<img />').attr('src', $(this).attr('href'))
            .load(function(){
                 
                var padd = 6,
                    halfWidth =  - Math.ceil($img[0].width/2+padd),
                    halfHeight = - Math.ceil($img[0].height/2+padd);
                     
                $('body').append('<div class="lightBox"><a href="#" class="closeBox">&#215;</a></div>');
                $('.lightBox').append($img);
                $('.lightBox').css({marginLeft:halfWidth, padding:padd, marginTop:halfHeight}).fadeIn();
            });
             
    }
     
}

lb.init();


$("imageGallery a") .click (function(){
	var href = $(this).attr("hfref");
console.log();
}
