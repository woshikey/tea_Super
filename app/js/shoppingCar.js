require(['config'],function(){
    require(['jquery','template','header','footer','kefu','nav','cookie'],function($,template){
        //回车事件
        $('header').on('keyup',"input[type='text']",function(e){
                if(e.which==13){
                    location='/html/list.html'
                }
        })
        //渲染购物车
        $.cookie.json = true;
        var products = $.cookie('products') || [];
        if(products.length ==0){
            return 
        }
        const html = template('tbody',{data:products});
        $('tbody').html(html);
        total();
        //删除
        $('tbody').on('click','.shan a',function(){
            var _tr = $(this).parent().parent();
            var _id = _tr.attr("id");
           for(let i=0;i<products.length;i++){
               if(products[i].id==_id){
                  products.splice(i,1);
                  break;
               }
           }
            // 把数组存回cookie
            $.cookie("products", products, {expires:10, path:"/"});
            //DOM操作
            _tr.remove();
            total();
        })
        //修改数量点击加减
        $('tbody').on('click','.del,.add',function(){
            var _tr = $(this).parent().parent();
            var _id = _tr.attr("id");
            if($(this).is('.del')){
                var vel =$(this).next().val();
                vel--;
                if(vel==0){
                    $(this).hide()
                }
            }else if($(this).is('.add')){
                var vel =$(this).prev().val();
                vel++;
                if(vel!=0){
                    $(this).siblings('.del').show()
                }
            }
            for(let i=0;i<products.length;i++){
                if(products[i].id==_id){
                   products[i].amount = vel;
                   break;
                }
            }
             // 把数组存回cookie
             $.cookie("products", products, {expires:10, path:"/"});
              //DOM操作
             $(this).siblings('#tex').val(vel);
             //获取本行单价
             var danJia = parseFloat(_tr.find('.tbody_price span').eq(1).text()); 
             _tr.find('.price').html(vel*danJia)
              total();
        })
        //输入数量
        $('tbody').on('blur','#tex',function(){
            var _tr = $(this).parent().parent();
            var _id = _tr.attr("id");
            var vel = $(this).val();
            for(let i=0;i<products.length;i++){
                if(products[i].id==_id){
                    products[i].amount = vel;
                    break;
                }
            }
                // 把数组存回cookie
            $.cookie("products", products, {expires:10, path:"/"});
            //DOM操作
            var danJia = parseFloat(_tr.find('.tbody_price span').eq(1).text()); 
            _tr.find('.price').html(vel*danJia)
            total();
        })
        // 点击全选
       
        $('.all_change').on('click',function(){
            var bool = $(this).prop('checked');
            $('.dan_change').prop('checked',bool);
            total()
        })
        //点击单选
        $('tbody').on('click','.dan_change',function(){
            var dan_change_Len = $('.dan_change').length;
            var xuan_zhong = $('.dan_change:checked').length;
            var bool = dan_change_Len == xuan_zhong;
            $('.all_change').prop('checked',bool);
            total()
        })
        //封装计算总数量和总价的函数
        function total(){
            var totalNum = 0,totalAmount = 0;
            $('.dan_change:checked').each(function(index,curr){
                totalNum+=parseInt($(curr).parents('tr').find('#tex').val());
                totalAmount+=parseInt($(curr).parents('tr').find('.price').text());
            })
            $('.total_amount span').html(totalNum);
            $('.sum_Price span').html("￥"+totalAmount);
        }
    })
})


