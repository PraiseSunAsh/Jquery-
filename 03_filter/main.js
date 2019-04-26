//从类名是爷爷的div中找到所有的类名是child的盒子并设置属性
$('.grandpa').find('.child').css('border','2px solid red');
//从类名是第一个孩子的div中找到他爹并设置css属性
$('#child1').parent().css('border', '2px solid #666');
//从类名是第一个孩子的div中找到他爷并设置css属性(并不严谨，如果孩子的爹也有个叫grandpa的类
//那么他爹也会被选中)
$('#child1').parents('.grandpa').css('border', '2px solid #333');
//如果一个div的class有两个名字，那么只能用filter给他选出来
$('.child').filter('.not-gay').css('background','red');
