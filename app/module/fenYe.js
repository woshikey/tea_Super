define(['template'],function(template) {
	function fenYe() {
		//定义每页显示4条数据
		var dataAmount = 4;
		//定义默认是第一页显示
		var index = 1;
		//初始化总页数
		var totalPage = 0;
		//初始化总数据量
		var totalData = 0;
		//点击分页的按钮,默认显示第一页数据用
		function selectBtn(index) {
			var url = "http://localhost/php/list.php?dataAmount=" + dataAmount + "&index=" + index;
			$.get(url, function(resp) {
				//计算总页数
				totalData = resp.res_totalNum;
				//dataAmount被隐式转换为number类型
				totalPage = Math.ceil(totalData / dataAmount);
				//添加数据到表格里
				const html = template('list',{data:resp.res_bady});
                $('.list_ul').html(html);
                $('.show_page span').html("共"+totalPage+"页");
				//添加每页的按钮
				var _html ='';
				for(let i = 1; i <= totalPage; i++) {
					//点击页码每次都调用selectBtn,li会刷新，那时不能给li绑定currLi,要在此处绑定
					if(i==index){
						_html += "<li class='currLi'>"+i+"</li>"
					}else{
						_html += "<li>"+i+"</li>"
					}
				}
				$('.show_page .num').html(_html)
			},'json')
		}
		selectBtn(index);
		//点击页码
		$('.show_page .num').on('click','li',function(){
			var num = $(this).index()+1;
			index = num;
			selectBtn(index);
			
		})
		//点击上一页
		$('.show_page #before').click(function(){
			index--;
			if(index < 1) index = 1;
			selectBtn(index);
		})
		//点击下一页
		$('.show_page #after').click(function(){
			index++;
			if(index > totalPage) index = totalPage;
			selectBtn(index);
		})
		//选择跳转页,点确定
		$('.sure button').click(function(){
			var num = $('.to_page input').val();
			index = num;
			selectBtn(index);
		})
	}

	return fenYe;
})