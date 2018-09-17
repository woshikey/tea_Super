define(function(){
    $('header').load('/html/head.html',function(){
      
        //拿到cookie的username
        const name = $.cookie('username');
        //拿到cookie的products数据渲染购物车
        const products = $.cookie('products');
        $.cookie.json = true;
        if(name){
            let html = `<span>欢迎你，${name}</span>`;
            $('#user').html(html);
        }
        if(products){
            //计算cookie中所有商品的总数量
           var sum = 0;
           products.forEach(function(curr,index){
               sum += curr.amount
           })
           $('.car span').text(sum)
        }
    })
         
    
})