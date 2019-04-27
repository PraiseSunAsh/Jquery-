// **更改元素的属性值**
//原生js写法
// document.getElementById("a").setAttribute("href","https://www.baidu.com"); 
// jquery写法
$('#a').attr('href', 'https://www.baidu.com');
//当传一个值进去的时候。会返回这个属性的value
var tmp = $('#a').attr('href');
console.log(tmp);
//*更改元素内容*/
//很奇怪  用attr无法设置text，并且返回的是个未定义  要设置目前只发现了text方法  log：4.27
$('#b').text('哈啊哈哈哈哈');
//移除属性 
$("#c").removeAttr('class');//打开元素审查  会发现class属性消失了