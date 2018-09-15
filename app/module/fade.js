define(function(){
    function LunBo(id){
        this.index = 0;
        this.ele = $(id);
        this.li_pic = this.ele.find('.lunBo_pic li');
        this.li_num = this.ele.find('.lunBo_num li');
        this.li_Len = this.li_pic.length;
    };
    LunBo.prototype.init = function(){
        var _this = this;
        var timer = setInterval(function(){_this.move(1)},3000);
        this.ele.hover(function(){
            clearInterval(timer)
        },function(){
            timer = setInterval(function(){_this.move(1)},3000)
        })
        this.dian();
    }
    LunBo.prototype.move = function(num){
        var _this = this;
        this.li_num.eq(_this.index).removeClass('currNum');
        this.li_pic.eq(_this.index).fadeOut(300,function(){
            _this.index = _this.index+num;
            if(_this.index==_this.li_Len){
                _this.index = 0
            }else if(_this.index==-1){
                _this.index = _this.li_Len-1
            }
            _this.li_num.eq(_this.index).addClass('currNum');
            _this.li_pic.eq(_this.index).fadeIn(300);
        })

    };
    LunBo.prototype.dian = function () {
        var _this = this;
        this.li_num.on('click',function () {
            var index= $(this).index();
            _this.li_num.eq(_this.index).removeClass('currNum');
            _this.li_pic.eq(_this.index).fadeOut(300,function () {
                _this.index = index;
                _this.li_num.eq(_this.index).addClass('currNum');
                _this.li_pic.eq(_this.index).fadeIn(300)
            })

        })
    }
    return LunBo;    
})


