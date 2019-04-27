//当‘click’card-trigger这个按钮时所发生的事件
$('#card-trigger').on('click', function () {
    if($('#card').is(':visible')){
        $('#card').slideUp();
    }else  $('#card').slideDown();
});
//也可以直接调用click方法，但这样写不易拓展和更改
// $('#card-trigger;).click(function (e) { 
// });

//当鼠标进入#card这个div时所发生的的事件
$('#card').on('mouseenter', function () {
   $('#card').addClass('active');
});
//当鼠标离开#card这个div时所发生的的事件
$('#card').on('mouseleave', function () {
    $('#card').removeClass('active');
 });

 //其他事件类型
 //http://www.w3school.com.cn/jquery/jquery_ref_events.asp