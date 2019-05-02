//选中页面中所有的自定义属性 【data-rule】
//解析自定义属性
//验证

//main.js如果不用jquery闭包包起来的话就会被先加载
//这时里面的Validator构造函数就会显示未定义（因为Validator也被Jquery闭包包起来了）
jQuery(function () {
    //创建一个新的验证对象，并在构造器中创建规则
    var validator = new Validator('abc',{
        pattern:'^[a-zA-Z0-9]*$',
        maxLength:5,
        required:true,
    });
    var test = new Input('#test');
    console.log(is_valid());
});
