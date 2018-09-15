define(function(){
    //手机号验证
    $('#phone').blur(function(){
        var val = $(this).val();
        if(!(/^1[34578]\d{9}$/.test(val))){ 
            $('.hint').html('手机号有误，请重新输入');
            $(this).focus()
        }else{
            $('.hint').html('');
            open_register()
        } 
    })
    //密码验证
    $('#paw').blur(function(){
        var val = $(this).val();
        if(!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(val))){
            $('.hint').html('密码有误，请重新输入');
            $(this).focus()
        }else{
            $('.hint').html('');
            open_register()
        }
    })
    $('#paw+input').blur(function(){
        var val1 = $(this).val();
        var val2 = $('#paw').val();
        if(val1 != val2){
            $('.hint').html('密码不统一，请重新输入');
            $(this).focus()
        }else{
            $('.hint').html('');
            open_register()
        }
    })
    //图片验证
    $('#pic').blur(function(){
        var val = $(this).val();
        var _sid = $(this).next()[0].sid;
        $.ajax({
            type:"POST",
            url:"http://route.showapi.com/932-1",
            dataType:"json",
            data:{
                showapi_appid : "71947",
                showapi_sign : "b12eab35a2bc4f69b0714c324463dadc",
                checkcode : val,
                sid : _sid
            },
            success:function(data){
                if(!data.showapi_res_body.valid){
                    $('#pic').focus();
                    $('.hint').html('验证码不正确，请重新输入');
                }else{
                    $('.hint').html('');
                    open_register()
                }
            }
        })
    })
    //短信验证
    $('.duanxin_pic span').click(function(){
        var num = 60;
        $(this).html(60);
        var _this = $(this); 
        var timer = setInterval(function(){
            num--;
            if(num<0){
                clearInterval(timer);
                _this.html("获取验证码");
            }
            _this.html(num);
        },1000)
    })
    $('.duanxin_pic input').blur(function(){
        var val = $(this).val();
        if(val.length==0){
            $(this).focus();
            $('.hint').html('短信码不正确，请重新输入');
        }else{
            $('.hint').html('');
            open_register()
        }
    })

    //打开注册
    function open_register(){
        var count = 0;
        $('.len').each(function(index,curr){
           var len = $(curr).val().trim();
           if(len != ""){
                count++
           }
        })
       if(count == $('.len').length && $('.hint').html().length==0){
        $('#zhuCe').css({
            "color" : "#fff",
            "background": "#ff4500",
            "cursor":"pointer"
        })
       }
    }
})