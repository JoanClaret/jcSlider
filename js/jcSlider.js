/**
 * Animació dels testimonials
 * (used in dezone's home and devzone's landings)
 */

// init

(function ( $ ) {

    $.fn.jcSlider = function(options) {

        // hide all items excepting first
        $(this).find('.jc-animation:not(:first)').hide();

        // get settings
        var settings = $.extend({
            // default settings
            animationIn: "bounceInRight",
            animationOut: "bounceOutLeft"
        }, options );

        var animateOut = 'animated ' + settings.animationOut;
        var animateIn =  'animated ' + settings.animationIn;
        var animationItem = $(this).find('.jc-animation');
        var animationItemsLength = animationItem.length;
        var animationCurrentItem = 0;
        var jcSliderInterval = '';

        var moveItem = function(){
                    
            // move current item
            animationItem.eq(animationCurrentItem)
            .removeClass(animateOut) // reset exit animation
            .hide();      // hide

            // select next item
            animationCurrentItem ++;
            if (animationCurrentItem == animationItemsLength){
                animationCurrentItem = 0;
            }
            
            // move next item
            animationItem.eq(animationCurrentItem)
            .show() // show
            .addClass(animateIn);  // next item animation
        };

        var jcSliderAnimation = function(){

            jcSliderInterval = setInterval(function() { 

                animationItem.eq(animationCurrentItem)
                .removeClass(animateIn) // reset enter animation
                .addClass(animateOut)   // exit animation
                
                // when exit animation is finished, move next item
                .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', moveItem); 

            },  4000);
        };

        $(jcSliderAnimation()); // Initialise the testimonial animation function

        $(".jc-slider").hover(
            function(){ // Stop the animation on hover
                clearInterval(jcSliderInterval);
            },
            function(){
                jcSliderAnimation();
        });
    };
}( jQuery ));