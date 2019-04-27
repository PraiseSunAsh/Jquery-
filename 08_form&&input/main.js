//setVal和getVal
console.log($('#nickname').val());
$('#ta').val("岂因祸福避趋之");
//光标默认放到指定元素上
$('#tb').focus();
//当光标放到指定元素上的时候，会发生的event
$('#tc').focus(function () { 
    console.log("--长者");
});
//当光标没有放到指定元素上的时候，会发生的event
$('#tc').blur(function () { 
    console.log("--jzm");
});
//当点击button按钮时，提交表单
$('#button').click(function(){
    $('#login').submit();
});