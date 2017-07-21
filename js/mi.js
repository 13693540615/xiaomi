//头部菜单栏
$(".menu_li").hover(function(){
    $("#menu_content_bg").css("border","1px solid #D0D0D0");
    $(this).css("color","#ff6700");
//  $("#"+$(this).attr("id")).show();
    $("#menu_content_bg").height(230);
},function(){
    $("#menu_content_bg").css("border","0px solid #D0D0D0");
   $(this).css("color"," #424242");
//  $("#"+$(this).attr("id")).hide();
    $("#menu_content_bg").height(0);
})
//侧部菜单栏
$("#banner_menu_wrap").children().hover(function(){
    $(this).css("background","#ff6700");
    $(this).children(".banner_menu_content").css("border","1px solid #F0F0F0").show();
},function(){
    $(this).css("background","none");
    $(this).children(".banner_menu_content").css("border","0px solid #F0F0F0").hide();
})


//家电
$("#jia>.top>ul>li").hover(function(){
	var index=$(this).index();
	$("#jia>.top>ul>li").eq(index).addClass('active').siblings().removeClass('active');
})
//智能
$("#xiaozhi>.top>ul>li").hover(function(){
	var index=$(this).index();
	$("#xiaozhi>.top>ul>li").eq(index).addClass('active').siblings().removeClass('active');
})
//搭配
$("#pei>.top>ul>li").hover(function(){
	var index=$(this).index();
	$("#pei>.top>ul>li").eq(index).addClass('active').siblings().removeClass('active');
})
//配件
$("#jian>.top>ul>li").hover(function(){
	var index=$(this).index();
	$("#jian>.top>ul>li").eq(index).addClass('active').siblings().removeClass('active');
})
//周边
$("#bian>.top>ul>li").hover(function(){
	var index=$(this).index();
	$("#bian>.top>ul>li").eq(index).addClass('active').siblings().removeClass('active');
})