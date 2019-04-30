//选中页面中所有的自定义属性 【data-rule】
//解析自定义属性
//验证

var validator = new Validator(15,{
    max:100,
    min:18,
});
var res = validator.validate_max();
console.log(res);
