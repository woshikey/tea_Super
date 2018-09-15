define(function(){
    //手机号验证(验证1)
    $('#phone1').blur(function(){
        var val = $(this).val();
        if(!(/^1[34578]\d{9}$/.test(val))){ 
            $('.hint1').html('手机号有误，请重新输入');
            $(this).focus()
        }else{
            $('.hint1').html('');
            open_register(1);
        } 
    })
    //密码验证(验证1)
    $('#paw').blur(function(){
        var val = $(this).val();
        if(!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(val))){
            $('.hint1').html('密码有误，请重新输入');
            $(this).focus()
        }else{
            $('.hint1').html('');
            open_register(1)
        }
    })
   //手机号验证(验证2)
   $('#phone2').blur(function(){
    var val = $(this).val();
    if(!(/^1[34578]\d{9}$/.test(val))){ 
        $('.hint2').html('手机号有误，请重新输入');
        $(this).focus()
    }else{
        $('.hint2').html('');
        open_register(2);
    } 
    //验证码(验证2)
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
                    $('.hint2').html('验证码不正确，请重新输入');
                }else{
                    $('.hint2').html('');
                    $('#duanxin').removeAttr('disabled');
                    open_register(2)
                }
            }
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
            $('.hint2').html('短信码不正确，请重新输入');
        }else{
            $('.hint2').html('');
            open_register(2)
        }
    })
    })
})
     //打开登录
     function open_register(num){
        var count = 0;
        $('.len'+num).each(function(index,curr){
           var len = $(curr).val().trim();
           if(len != ""){
                count++
           }
        })
       if(count == $('.len'+num).length && $('.hint'+num).html().length==0){
        $('#login'+num).css({
            "color" : "#fff",
            "background": "#ff4500",
            "cursor":"pointer"
        })
       }
    }
})