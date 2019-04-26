//为.a这个div设置css
$('.a').css({
    color: 'red',
    backgroundColor:'black',
    border:'3px solid red'
});
//为.b这个div追加一个自定义的black然后再移除
$('.b').css({
    color: 'red',
    backgroundColor:'black',
    border:'3px solid green'
}).addClass('black').removeClass('black');
//hasClass可以判断对象中是否有这个类
var a = $('.b').css({
    color: 'red',
    backgroundColor:'black',
    border:'3px solid green'
}).addClass('black').removeClass('black');
console.log(a.hasClass('black'));
console.log(a.hasClass('b'));
//隐藏或者展示一个元素
$('.c').hide();
$('.c').show();
//慢慢的隐藏或者展示一个元素(逐渐消失型)
$('.c').fadeOut(1000);
$('.c').fadeIn(1000);
//慢慢的隐藏或者展示一个元素（上滑型）
$('.c').slideUp(1000);
$('.c').slideDown(1000);