require(['config'],function(){
    require(['template','jquery','fade','daojishi','huaDong','gunDong','header','footer','kefu','cookie'],function(template,$,LunBo,Dojishi,wuFeng,sc){
        //调用淡入淡出
        new LunBo("#lunBo1").init();
        // 调用倒计时
        new Dojishi(9000).init();
        // 调用无缝
        wuFeng();
        // 调用滚动条事件
        sc();
        //menu
        $.get('http://localhost/php/menu.php',function(data){
            if(data.code==1){
                data.res_bady.forEach(function(curr){
                    curr.name = curr.name.split(',')
                })
                const html = template('menu',{menu_data:data.res_bady});
                $('#list').html(html);
            }
            // console.log(data.res_bady)
        },'json').done(function(){
            //menu移入移出
            $('#list>dl').hover(function(){
                $(this).addClass('currDl').siblings().removeClass('currDl');
                var _this = $(this);
                var _index = _this.index()+1;
                $.getJSON('http://localhost/php/menu_pic.php',{index:_index},function(data){
                    if(data.code==1){
                        data.res_bady.forEach(function(curr){
                            curr.name = curr.name.split(',');
                            curr.url = curr.url.split(',');
                        })
                        $('#list section ul').html();
                        let html = '';
                        for(let i=0;i<data.res_bady[0].url.length;i++){
                            html += `<li>
                            <a href="javascript:void(0)"><img src="${data.res_bady[0].url[i]}" alt=""> </a>
                            <a href="javascript:void(0)">${data.res_bady[0].name[i]}</a>
                                    </li>`
                        }
                        _this.find('ul').html(html);
                        _this.find('section').show();
                    }
                })
            },function(){
                $('#list>dl').removeClass('currDl');
                $('#list section').hide();
            })
        })
    })
})
