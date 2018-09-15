define(function(){
	function Gun(){
		this.liHeight = $('.pic li').innerHeight();
		this.liLen = $('.pic li').length;
		this.chao = 0;
		this.youXiao =true;
	};
	Gun.prototype.init = function(){
		var _this = this;
		$('.shang').on('click',function(){
			_this.move(-1)
		})
		$('.xia').on('click',function(){
			_this.move(1)
		})
	}
	Gun.prototype.move = function(num){
		var _this = this;
		if(_this.youXiao){
			_this.youXiao = false;
			$('.pic li').eq(_this.chao).removeClass('currLi');
			$('.goods_bpic li').eq(_this.chao).removeClass('currImg');
			_this.chao=_this.chao+num;
			$('.shang').next().animate({"scrollTop": _this.chao*_this.liHeight}, 500,function(){
				_this.youXiao = true;
				$('.pic li').eq(_this.chao).addClass('currLi');
				$('.goods_bpic li').eq(_this.chao).addClass('currImg');
			});		
		}
	}
	
	return new Gun();
})