define(function(){
    function Dojishi(times){
        this.count = times;
        this.timer2 = null;
    };
    Dojishi.prototype.init = function(){
        var _this = this;
        this.timer2 = setInterval(function(){_this.begin()},1000)
    };
    Dojishi.prototype.begin = function(){
        this.count--;
        if(this.count<0){
            clearInterval(this.timer2);
            $('.time').slideUp(3000);
        }
        this.second = parseInt(this.count%60);
        this.second = this.second<10 ? "0"+this.second : this.second;
        this.minite = parseInt(this.count/60%60);
        this.minite = this.minite<10 ? "0"+this.minite : this.minite;
        this.hour = parseInt(this.count/60/60%24);
        this.hour = this.hour<10 ? "0"+this.hour : this.hour;
        $('#hour').html(this.hour);
        $('#minites').html(this.minite);
        $('#second').html(this.second);
    };
return Dojishi;
})



