//利用ajax方法搜索PraiseSunAsh的用户信息
$.ajax('https://api.github.com/users/PraiseSunAsh').done(function (data) {
    console.log('data:',data);
})

//抓取信息并渲染到html中
var username;
$('#search').on('submit', function (e) {
    e.preventDefault();
    username = $('#username').val();
    $.ajax('https://api.github.com/users/'+username).done(function(data){
        var html = '<div>用户名：'+data.login+'</div>'+'<div>介绍:'+data.bio+'</div>';
        $('#result').html(html);
    })
});