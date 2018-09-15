define(function(){
    function wuFeng(){
        var overBox = 1,//初始状态1个ul超出
            picWidth = $('.wuFeng ul').width(),
            picLen =  $('.wuFeng ul').length;
        function move1(num){
            //每次多超出一个ul
            overBox=overBox+num;
            $('.wuFeng').animate({left:-1*overBox*picWidth},800,function(){
                if(overBox==picLen-1){
                    overBox = 1;
                    $(this).css('left',-1*overBox*picWidth);
                }else if(overBox==0){
                    overBox = picLen-2;
                    $(this).css('left',-1*overBox*picWidth);
                }
            })
        };

        var timer1 = setInterval(function(){move1(1)},3000);

        $('.wuFeng').hover(function(){
            clearInterval(timer1);
        },function(){
            timer1 = setInterval(function(){move1(1)},3000);
        })
    }
    return wuFeng;
})