define(function(){
    // 滚动条事件
    function sc(){
        var teJia = $('.time').offset().top,
            ziYing = $('.ziYing').offset().top,
            songLi = $('.songLi').offset().top,
            chaJu = $('.ware').offset().top,
            rePing = $('.hot').offset().top,
            xinWen = $('.new').offset().top,
            wrapArr = [teJia,ziYing,songLi,chaJu,rePing,xinWen];
        $(window).scroll(function(){
            var juLi = $(this).scrollTop();
            //返回顶部显示
            if(juLi>chaJu){
                $('.return').fadeIn(1000);
                $('#louCeng').fadeIn(1000);
            }
        })
        // 点击楼层
        $('#louCeng li').on('click',function(){
            var index = $(this).index();
            $("html,body").animate({"scrollTop": wrapArr[index]}, 500);
        })
    }
    return sc;
})