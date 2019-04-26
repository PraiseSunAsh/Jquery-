//获取标签中的文字与set标签中的文字
var a = $('#a').text();
console.log(a);
$('#a').text("考你急哇");
//get标签中的html与set标签中的html
var b = $('#b').html();
console.log(b);
$('#b').html('Are U OK?');
//在某个元素前后追加元素
$('#a').append('<div>Append</div>');
$('#a').prepend('<div>Prepend</div>');
//删除某个元素
$('#c').remove();