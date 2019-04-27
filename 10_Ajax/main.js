//利用ajax方法搜索PraiseSunAsh的用户信息
$.ajax('https://api.github.com/users/PraiseSunAsh').done(function (data) {
    console.log('data:',data);
})

// 抓取信息并渲染到html中
var username;
$('#search').on('submit', function (e) {
    e.preventDefault();
    username = $('#username').val();
    $.ajax('https://api.github.com/users/'+username).done(function(data){
        var html = '<div>用户名：'+data.login+'</div>'+'<div>介绍:'+(data.bio||'无个人信息')+'</div>';
        $('#result').html(html);
    })
});

//ajax封装
$.ajax({
    type: "get",
    url: "//https://api.github.com/users/PraiseSunAsh",
    data: {
        username:'wxx',
        password:'asdf',
    },
    dataType: "dataType",
    success: function (data) {
        console.log('请求成功');
    },
    error:function () {
        console.log('请求失败');
    }
});