
;(function($){
	$(function(){

		// Begin input common focus and blur for value.
		$('input:text,input:password,textarea').focus(function(){if(this.value==this.defaultValue){this.value=''}})
		$('input:text,input:password,textarea').blur(function(){if(!this.value){this.value=this.defaultValue;}})
		// Ends input common focus and blur for value.
		
        
        $('#vanguard-tabs li').eq(0).addClass('active')
        $('#vanguard-tab-text-wrap div.vanguard-tab-text').hide()
        $('#vanguard-tab-text-wrap div.vanguard-tab-text').eq(0).show()
        $('#vanguard-tabs li').each(function(i){

            $(this).click(function(){
                if( $(this).hasClass('active') ) return false

                else{
                    $('#vanguard-tabs li').removeClass('active')
                    $(this).addClass('active')
                    $('#vanguard-tab-text-wrap div.vanguard-tab-text').hide()
                    $('#vanguard-tab-text-wrap div.vanguard-tab-text').eq(i).show()

                }

            })

        })
        if($('section.home-content-section').length){
            $('body').addClass("home-page-body")
        }
        
        $('#expand-btn').click(function(){
            $('div.search-wrap').toggleClass('search-box-expanded')
        })


        // Begin input common focus and blur for value.
        $('#searchBox').keyup(function(){
            $('div.search-wrap').addClass('value-added')
        })


        $('#searchBox').blur(function(){
            if(!this.value){this.value=this.defaultValue;}
            if(this.value==this.defaultValue){
                $('div.search-wrap').removeClass('value-added')
            }
        });
        
        $('#accordian div.query > p').hide()
        $('#accordian div.query > span').click(function(){
            if($(this).parent().hasClass('active')){
                $(this).parent().find('> p').slideToggle()
                $(this).parent().removeClass('active')
            }

            else{
                $('#accordian div.query > p').slideUp()
                $(this).parent().find('> p').slideToggle()
                $('#accordian div.query').removeClass('active')
                $(this).parent().addClass('active')
            }
        });
       
        if($('.styled-select').length){

            // Selectric styled dropdown calling
            $('select.styled-select').selectric();
        }
        
        $('#phone-nav').click(function(){
            $('.primary-menu').slideToggle()
        });
        
        $('#hero-overlay-left').mouseenter(function(){
            $(this).parent().addClass('go-right')
        })
        
        $('#hero-overlay-left').mouseleave(function(){
            $(this).parent().removeClass('go-right')
        })
        
        $('#hero-overlay-right').mouseenter(function(){
            $(this).parent().addClass('go-left')
        })
        
        $('#hero-overlay-right').mouseleave(function(){
            $(this).parent().removeClass('go-left')
        })
        
        // Ends input common focus and blur for value.
        
        //$('.primary-menu ul li').find('.dropdown-wrap').addClass('dropdownNav')
        $('.primary-menu ul li').find('.dropdown-wrap').parent().addClass('hasDropdown')

        if($(window).width() < 768){
            $('.primary-menu ul li.hasDropdown > a').bind('click','tuchend', function(e){
                e.preventDefault()
                $('.primary-menu ul li.hasDropdown').removeClass('active')
                $(this).parent().addClass('active')
                $('.primary-menu ul li.hasDropdown').find('> .dropdown-wrap:visible').slideUp()

                if($(this).parent().find('> .dropdown-wrap:visible').length){
                    $(this).parent().find('> .dropdown-wrap').slideUp()
                    $(this).parent().removeClass('active')
                }

                else{
                    $(this).parent().find('> .dropdown-wrap').slideDown()
                    $(this).parent().addClass('active')
                }

            })
        }
		
       if($(window).width() > 767){
           $(window).scroll(function(){
               if($(window).scrollTop() > 90){
                   $('.main-header').addClass('go-top')
               }
               else{
                   $('.main-header').removeClass('go-top')
               }
           })

           $(window).scroll(function(){
               if($(window).scrollTop() > 250){
                   $('.main-header').addClass('fixed-top')
               }
               else{
                   $('.main-header').removeClass('fixed-top')
               }
           })
       }
        
        
        
	})// End ready function.

	$(window).load(function(){
        // Begin common slider
        if ( $('#parnter-carousel').length == 0 ) return false

        $('#parnter-carousel').flexslider({
            animation:"slide",
            slideshow: true,
            directionNav: false,
            controlNav:true,
            slideshowSpeed: 5000,  //Integer: Set the speed of the slideshow cycling, in milliseconds
            animationSpeed: 600, 
            manualControls: "#carousel-control-nav li",
            useCSS: false,
            start: function(slider){
                //$('body').removeClass('loading');

            }
            ,
            animationLoop: true,
            pauseOnAction: false, // default setting

            after: function(slider) {

            }
        })

    	//$('div.slider-wrap video').trigger('play');

    })
	$(window).load(function(){
        // Begin common slider
        if ( $('div.drone-slider').length == 0 ) return false

        $('div.drone-slider').flexslider({
            animation:"slide",
            slideshow: false,
            directionNav: false,
            controlNav:true,
            slideshowSpeed: 5000,  //Integer: Set the speed of the slideshow cycling, in milliseconds
            animationSpeed: 600, 
            manualControls: "#overview-controle ol li",
            useCSS: false,
            start: function(slider){
                //$('body').removeClass('loading');

            }
            ,
            animationLoop: true,
            pauseOnAction: false, // default setting

            after: function(slider) {

            }
        })

    	//$('div.slider-wrap video').trigger('play');

    })
	

})(jQuery)

//Quad, Cubic, Quart, Quint, Sine, Expo, Circ, Elastic, Back, Bounce
jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b+c;return-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b+c;return d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b+c;return-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b*b+c;return d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){if(b==0)return c;if(b==e)return c+d;if((b/=e/2)<1)return d/2*Math.pow(2,10*(b-1))+c;return d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){if((b/=e/2)<1)return-d/2*(Math.sqrt(1-b*b)-1)+c;return d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;if(!g)g=e*.3*1.5;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);if(b<1)return-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c;return h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;if((b/=e/2)<1)return d/2*b*b*(((f*=1.525)+1)*b-f)+c;return d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){if((b/=e)<1/2.75){return d*7.5625*b*b+c}else if(b<2/2.75){return d*(7.5625*(b-=1.5/2.75)*b+.75)+c}else if(b<2.5/2.75){return d*(7.5625*(b-=2.25/2.75)*b+.9375)+c}else{return d*(7.5625*(b-=2.625/2.75)*b+.984375)+c}},easeInOutBounce:function(a,b,c,d,e){if(b<e/2)return jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+c;return jQuery.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c}})