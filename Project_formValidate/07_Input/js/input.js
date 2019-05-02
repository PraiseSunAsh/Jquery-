jQuery(function () {
   'use strict';
   window.Input = function (selector) {
       var $ele;
       var rule = {};
       var that = this;
       // {
       //     pattern:'^[a-zA-Z0-9]*$',
       //     maxLength:5,
       // }
       function init() {
           find_ele();
           parse_rule();
           that.load_validator();
           listen();
       }
       
       function find_ele() {
           if(selector instanceof jQuery){
               $ele = selector;
           }else $ele = jQuery(selector);
       }
       
       function parse_rule() {
           //可以获取到data-xxxx的数据
           var ruleString = $ele.data('rule');
           if(!ruleString) return;
           //把ruleString中的每个部分都存到数组中
           var ruleArr = ruleString.split('|');
           for(var i = 0;i<ruleArr.length;i++){
              var item_arr = ruleArr[i].split(':');
              //{"min","18"}
               // 最后还是把这组规则装到一个类似hashset的结构中了
               //用JSON转一下，最后rule[]中存的都是JSON
               rule[item_arr[0]] = JSON.parse(item_arr[1]);

           }
       }

       this.load_validator = function () {
           //构造函数需要一个字面值，还需要一个规则
           this.validator = new Validator(this.get_val(),rule);
       };
       this.get_val = function () {
           //字面值的获取直接调用Jquery的一个函数
           return $ele.val();
       };
       
       function listen() {
           $ele.on('change',function () {
              var r = that.validator.is_valid(that.get_val());
              console.log(r);
           })
       }
       
   }
});