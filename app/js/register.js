require(['config'],function(){
    require(['jquery','register_check'],function($){
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
        //点击注册
       $('form').submit(function(e){
           e.preventDefault();
           $.ajax({
               type:"POST",
               url:"http://localhost/php/user.php",
               dataType:"json",
               data:{"username":$('#phone').val(),"password":$('#paw').val()},
               success:function(data){
                   if(data.code==1){
                       location="/html/login.html"
                   }else{
                       alert('不成功')
                   }
               }
           })
       })
    })
})