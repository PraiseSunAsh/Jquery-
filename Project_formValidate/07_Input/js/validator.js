

// $(function(){
//
//     window.Validator = function(val,rule){
//         'use strict';
//
//         //如果不是必填项并且用户未填写内容要判定为合法
//         this.is_valid = function () {
//             if(!rule.required&&!val)//此处有更改
//                 return true;
//             for(var key in rule){
//                 if(key==='required')
//                     continue;
//                 //获取rule中的每一个key，利用它们动态调用验证器的方法
//                 var r = this['validate_'+ key]();
//                 //写到这才发现验证器里面的方法都是返回的布尔值
//                 if(!r) return false;
//             }
//             return true;
//         };
//         this.validate_max = function(){
//             //转下类型，保险起见
//             pre_max_min();
//             return val <= rule.max;
//         };
//         this.validate_min = function(){
//             //转下类型，保险起见
//             pre_max_min();
//             return val >= rule.min;
//         };
//         this.validate_maxLength = function () {
//             //不管咋说先转成字符串比较保险
//         pre_length();
//         return val.length <= rule.maxLength;
//     };
//     this.validate_minLength = function () {
//         //不管咋说先转成字符串比较保险
//         pre_length();
//         return val.length >= rule.maxLength;
//     };
//
//     this.validate_numeric = function () {
//         //判断是否为数字，直接调jquery库
//         return $.isNumeric(val);
//     };
//
//     //表单中是否可以为空
//     this.validate_nullable = function () {
//         //先把val两端的空格处理一下
//         var real = jQuery.trim(val);
//         if(!real){
//             return false;
//         }
//         return true;
//     };
//
//     this.validate_pattern = function () {
//         var reg = new RegExp(rule.pattern);
//         return reg.test(val);//正则对象测试值是否满足规则
//     };
//
//         //封装下前置代码
//         function pre_max_min() {
//             val = parseFloat(val);
//         }
//         function pre_length() {
//             val = val.toString();
//         }
//     };
// });
(function () {
    window.Validator = function(val,rule){
        // 'use strict';

        //如果不是必填项并且用户未填写内容要判定为合法
        window.is_valid = function (new_val) {
            val = new_val||val;
            if(!rule.required&&!val)//此处有更改
                return true;
            for(var key in rule){
                if(key==='required')
                    continue;
                //获取rule中的每一个key，利用它们动态调用验证器的方法
                var r = this['validate_'+key]();
                //写到这才发现验证器里面的方法都是返回的布尔值
                if(!r) return false;
            }
            return true;
        };
        this.validate_max = function(){
            //转下类型，保险起见
            pre_max_min();
            return val <= rule.max;
        };
        this.validate_min = function(){
            //转下类型，保险起见
            pre_max_min();
            return val >= rule.min;
        };
        this.validate_maxLength = function () {
            //不管咋说先转成字符串比较保险
            pre_length();
            return val.length <= rule.maxLength;
        };
        this.validate_minLength = function () {
            //不管咋说先转成字符串比较保险
            pre_length();
            return val.length >= rule.maxLength;
        };

        this.validate_numeric = function () {
            //判断是否为数字，直接调jquery库
            return $.isNumeric(val);
        };

        //表单中是否可以为空
        this.validate_nullable = function () {
            //先把val两端的空格处理一下
            var real = jQuery.trim(val);
            if(!real){
                return false;
            }
            return true;
        };

        this.validate_pattern = function () {
            var reg = new RegExp(rule.pattern);
            return reg.test(val);//正则对象测试值是否满足规则
        };

        //封装下前置代码
        function pre_max_min() {
            val = parseFloat(val);
        }
        function pre_length() {
            val = val.toString();
        }
    };
})();