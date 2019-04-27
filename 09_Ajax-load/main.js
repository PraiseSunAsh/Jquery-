//toggle 切换元素的显示状态
// $('#button').on('click', function () {
//     $('#card').toggle();
// });

//从服务器端局部加载内容
//注意！！！！！
//如果用vscode的话要安装一个live Server的插件  打开index.html，点击右下角的golive
//否则控制台会报异常
$('#button').on('click', function () {
    $('#card').load('card.html');
    $('#card').toggle();
});

 /* 性能优化 */
 /* 对加载的状态进行判断，如果没有加载，则进行加载
    否则直接切换属性的状态*/
var loaded = false;
$('#haha').on('click', function () {
    if($('#card').is(':visible')){
        $('#card').slideUp();
    }else{
        if(!loaded){ $('#card').load('card.html');
        loaded = true;
    }      
        $('#card').slideDown();
    }
});