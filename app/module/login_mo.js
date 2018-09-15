define(function(){
    $('.login_type a').on('click',function(){
        $('form .inp').val('');
        $('.hint').html('');
        $('#duanxin').attr('disabled',"true");
        var index = $(this).index();
        $(this).addClass('orange').siblings().removeClass('orange');
        $('#login form').eq(index).show().siblings('form').hide();
    })
})