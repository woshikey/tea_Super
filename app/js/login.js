require(['config'],function(){
    require(['jquery','footer','login_mo','login_check','cookie'],function($){
       //图片接口
       pic();
       $('.check_pic img').on('click',function(){
           pic();
       })
       function pic(){
           $.ajax({
               type:"POST",
               url:"http://route.showapi.com/932-2",
               dataType:"json",
               data:{
                   "showapi_appid":"71947",
                   "showapi_sign":"b12eab35a2bc4f69b0714c324463dadc",
                   "length":"4"
               },
               success:function(data){
                   var res = data.showapi_res_body;
                   var imgUrl = res.image;
                   $('.check_pic img').attr('src',imgUrl);
                   $('.check_pic img')[0].sid=res.sid;
               }
           })
       }
      //点击登录
      //表单1
      $('.zhanghao').submit(function(e){
          e.preventDefault();
          $.ajax({
            type:"POST",
            url:"http://localhost/php/login.php",
            dataType:"json",
            data:{"username":$('#phone1').val(),"password":$('#paw').val()},
            success:function(data){
                if(data.code==1){
                    location='/index.html';
                    var phone = $('#phone1').val();
                    $.cookie('username',phone,{expires:1,path:"/"});
                }else{
                    alert('不成功')
                }
            }
          })
      })
      //表单2
      $('.duanxin').submit(function(e){
            e.preventDefault();
            $.ajax({
                type:"POST",
                url:"http://localhost/php/login1.php",
                dataType:"json",
                data:{"username":$('#phone2').val()},
                success:function(data){
                    if(data.code==1){
                         location='/index.html';
                        var phone = $('#phone2').val();
                        $.cookie('username',phone,{expires:1,path:"/"});
                    }else{
                        alert('不成功')
                    }
                }
            })
      })
    })
})