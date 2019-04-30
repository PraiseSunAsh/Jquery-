//自定义验证器
//大致的一个框架
$(function(){

    window.Validator = function(val,rule){
        'use strict';
        this.validate_max = function(){
            //转下类型，保险起见
            val = parseFloat(val);
            return val <= rule.max;
        }
    }
})