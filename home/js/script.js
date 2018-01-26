$(document).ready(function(){
    // scroll 
    var offset = 100;
    $("#navMenu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - offset;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    $("#first-navMenu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - offset;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    // blog more
    $('.all-posts-button').on('click', function(e) {
        e.preventDefault();
        $('.blog-more').toggleClass('blog-more-show');

        if (($(this).find('span').text()) === "AllPosts")
            $(this).find('span').text('Hide');
        else
            $(this).find('span').html('All<br>posts');
    });

    // blog post text more
    $('.post-text-more-button').on('click', function(e) {
        e.preventDefault();
        $(this).next(".post-more-text").toggleClass('post-more-text-show');
        $(this).css("display", "none");

    });
    // botton vertical
    var position = $( '.general-page__container_buttons-vertical' ).offset();
    $( '._buttons-vertical' ).css( 'margin-left','-'+ position.right + 'px' );

   // click
   $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
    // byrger 

    
    (function($){
        $(function() {
            $('.menu__icon').on('click', function() {
                $(this).closest('.menu').toggleClass('menu_state_open');
            });
        });
    })(jQuery);

});
