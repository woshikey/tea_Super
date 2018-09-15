require(['config'],function(){
    require(['jquery','fenYe','header','footer','kefu','nav','cookie'],function($,fenYe){
        $('.list_tilte').find('a').on('click',function(){
             $(this).parent().addClass('currA').siblings().removeClass('currA')
        })
        $('.snav').find('a').on('click',function(){
            $(this).addClass('snavA').siblings().removeClass('snavA')
        })
        //点击向下的按钮
        var bool = true;
        $('.toggle img').click(function(){
            if(bool){
                $(this).css("transform","rotate(180deg)");
                bool = false
            }else{
                $(this).css("transform","rotate(0deg)");
                bool = true
            }

            $('.list_tilte dl').eq(-1).slideToggle(400);
            $('.list_tilte dl').eq(-2).slideToggle(400);
        })
        //调用分页
        fenYe();
        //加入购物车
        $('.list_ul').on('click','.add_shoppingCar>a',function(e){
            e.preventDefault();
            var _li = $(this).parent().parent();
            //获取数据，用一个对象存起来
            var currProd = {
                id :_li.children('.list_pic').attr('id'),
                img : _li.children('.list_pic').find('img').attr("src"),
                desc1 : _li.children('.desc1').text(),
                price : _li.children('.price').find('span').text(),
                amount : 1
            };
           //防止第二次取出的是一个字符串的数组,要转化
                $.cookie.json = true;
           //读取cookie看有没有数据
           var products = $.cookie("products") || [];
          
           //判断商品是否购买过,如果买过，cookie里数量+1,没有一个条件满足，some返回false,表示没买过
           var has = products.some(function(curr){
                if (curr.id == currProd.id) { 
                    curr.amount++;
                    return true;
                }
           });
           //假如没买过,cookie里没有这个对象，则把该对象放入数组中
           if(!has){
              products.push(currProd)
           };
           //把数组放回cookie中，覆盖原数组
           $.cookie('products',products,{expires:1,path:"/"});
           //计算cookie中所有商品的总数量
           var sum = 0;
           products.forEach(function(curr,index){
               sum += curr.amount
           })
           $('.car span').text(sum)
        })
    })
})