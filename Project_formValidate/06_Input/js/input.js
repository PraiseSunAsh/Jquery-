jQuery(function () {
   'use strict';
   window.Input = function (selector) {
       var $ele;
       var rule = {};
       function init() {
           find_ele();
           parse_rule();
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
               //最后还是把这组规则装到一个类似hashset的结构中了
               //用JSON转一下，最后rule[]中存的都是JSON
               rule[item_arr[0]] = JSON.parse(item_arr[1]);

           }
       }
       
   }
});