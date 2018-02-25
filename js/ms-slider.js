function loopAnimate(tSize, tCount, obj, slider) {
    var size = tSize;
    var count = tCount;
    var obj = obj;
    var slider = slider;
    
    var msSliderAnimate = function () {
        $(obj).animate({
            left: '0px'
        }, 800 * tCount, 'linear', function () {
            $(obj).css('left', '-' + tSize + 'px');
            msSliderAnimate();
        });
    };
    
    msSliderAnimate();
};

function ms_slider (obj) {
    this._obj = obj;
    this._tSize = 0;
    this._tCount = 0;
    
    this.init = function () {
        // get imgSize, imgCnt
        //var imgSize = $('.ms-slider-content li .ms-slider-img').first().width();
        //var imgCnt = $('.ms-slider-content').children().length;
        
        // 하위에 링크가 있을 경우 다 안 받아지므로 Pass
        //var imgSize = $(obj + ' li .ms-slider-img').first().width();
        var imgSize = 200;
        this._tCount = $(obj).children().length;
        this._tSize = (imgSize + 10) * this._tCount;
        
        $(obj).css('left', '-' + this._tSize + 'px');
        //$('.ms-slider-content').css('display', 'block');
        
        /* 
        /// Animation Pause / Resume by egsjs API
        /// http://d2.naver.com/helloworld/9323973
        /// use Queue to realization pause and resume function
        */
        $(obj).hover(function () {
            $(this).pause();
        }, function () {
            $(this).resume();
        });
    }
    
    this.imageClone = function () {
        // copy image to repeat a list
        for (var i = 0; i <= this._tCount; i++) {
            $(obj + ' li:nth-child(' + i + ')').clone().appendTo(obj);
        }
    };
    
    // JQuery 1.8v에서 MAXIMUM CALL STACK SIZE EXCEEDED 에러 출력
    // 아마 3v 이상으로 업데이트가 되면서 Stack Size가 올라간 것으로 예측 됨
    //var slider = new ms_slider('.ms-slider-content', totalSize, imgCnt);
    //slider.loopAnimate(slider);
    
    this.loopAnimate = function (slider, size, count, obj) {
        var tSize = size || this._tSize;
        var tCount = count || this._tCount;
        var sObject = obj || this._obj;
        
        loopAnimate(tSize, tCount, sObject, slider);
    };
    
    this.loopStop = function (obj) {
        var sObject = obj || this._obj;
        
        $(obj).stop();
    };
}
