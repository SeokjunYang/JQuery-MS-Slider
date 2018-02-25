$(document).ready(function () {
    $('.slider-list').clone().appendTo('.slider-content');
    loopAnimate(0);
});

function loopAnimate(length) {
    var sliderLength = length;
    
    var slideAnimate = function () {
        $('.slider-content').animate({ 'left': '0px' }, 8000, 'linear', function () {
            $('.slider-content').css('left', '-1200px');
            slideAnimate();
        });
    }
    
    slideAnimate();
}