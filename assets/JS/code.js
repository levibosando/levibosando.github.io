
function dropdownMenu() {
    var x = document.getElementById('dropdownClick');
    if (x.className === 'topnav') {
        x.className += ' responsive';
    } else {
        x.className = 'topnav';
    }
}



$(function () {
    'use strict';
        
    var $isAnimatedSecond1 = $('.second .is_animated-1'),
        $isAnimatedSecond2 = $('.second .is_animated-2'),
        $isAnimatedSecond3 = $('.second .is_animated-3'),
        $isAnimatedThird1 = $('.third .is_animated-1'),
        $isAnimatedThird2 = $('.third .is_animated-2'),
        $isAnimatedThird3 = $('.third .is_animated-3'),
        $isAnimatedThird4 = $('.third .is_animated-4'),
        $isAnimatedFourth1 = $('.fourth .is_animated-1'),
        $isAnimatedFourth2 = $('.fourth .is_animated-2'),
        $isAnimatedFourth3 = $('.fourth .is_animated-3'),
        $isAnimatedFourth4 = $('.fourth .is_animated-4');

  

    // First Animation

            
    $isAnimatedSecond1.addClass('animated bounceInLeft').css('animation-delay', '.2s');
    $isAnimatedSecond2.addClass('animated slideInLeft').css('animation-delay', '.6s');
    $isAnimatedSecond3.addClass('animated slideInRight').css('animation-delay', '.6s');
            

           
    // Second Animation

    $isAnimatedThird1.addClass('animated bounceInLeft').css('animation-delay', '.2s');
    $isAnimatedThird2.addClass('animated zoomIn').css('animation-delay', '.1s');
    $isAnimatedThird3.addClass('animated zoomIn').css('animation-delay', '.1s');
    $isAnimatedThird4.addClass('animated zoomIn').css('animation-delay', '.1s');

            
    // Third Animation
           
    $isAnimatedFourth1.addClass('animated bounceInLeft').css('animation-delay', '.2s');
    $isAnimatedFourth2.addClass('animate-bottom');
    $isAnimatedFourth3.addClass('animate-bottom');
    $isAnimatedFourth4.addClass('animate-bottom');
       
});


