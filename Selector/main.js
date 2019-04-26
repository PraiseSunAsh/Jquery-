//通过id选择器把div设置为蓝色的背景色
document.getElementById("a").style.background = "blue";
//使用jquery把div设置为绿背景色
$("#b").css("background", "green");
//括号里也是可以用元素选择器的
$('div').css('color', 'gray');
//可以以用类选择器
$(".jason").css('background', 'orange');
//也可以用子类选择器
$('#a p').css('border', '2px solid black');
//也可以通过选择器的属性特征进行筛选
$('input[type="number"]').css('background', 'yellow');
//也可以用序数词选
$('div:first').css('border', '3px solid black');