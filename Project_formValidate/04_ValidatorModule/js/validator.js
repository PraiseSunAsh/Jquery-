

$(function(){

    window.Validator = function(val,rule){
        'use strict';
        this.validate_max = function(){
            //转下类型，保险起见
            val = parseFloat(val);
            return val <= rule.max;
        };
        this.validate_min = function(){
            //转下类型，保险起见
            val = parseFloat(val);
            return val >= rule.min;
        };
        this.validate_maxLength = function () {
            //不管咋说先转成字符串比较保险
            val = val.toString();
            return val.length <= rule.maxLength;
        }
    };
});
