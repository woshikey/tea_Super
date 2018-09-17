define(function(){
    function LunBo(id){
        this.indexNow = 0;
        this.indexFur = 0;
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
        this.li_num.eq(_this.indexNow).removeClass('currNum');
        this.li_pic.eq(_this.indexNow).fadeOut(1000);
        _this.indexFur = _this.indexNow+num;
            if(_this.indexFur==_this.li_Len){
                _this.indexFur = 0
            }else if(_this.indexFur==-1){
                _this.indexFur = _this.li_Len-1
            }
        _this.li_num.eq(_this.indexFur).addClass('currNum');
        _this.li_pic.eq(_this.indexFur).fadeIn(1000,function(){
            _this.indexNow = _this.indexFur;
        });
    };
    LunBo.prototype.dian = function () {
        var _this = this;
        this.li_num.on('click',function () {
            var index= $(this).index();
            _this.li_num.eq(_this.indexNow).removeClass('currNum');
            _this.li_pic.eq(_this.indexNow).fadeOut(1000);
            _this.indexFur = index;
                _this.li_num.eq(_this.indexFur).addClass('currNum');
                _this.li_pic.eq(_this.indexFur).fadeIn(1000,function(){
                    _this.indexNow = _this.indexFur;
                })
        })
    }
    return LunBo;    
})


