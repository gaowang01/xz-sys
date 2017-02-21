/**
 * Created by User on 2017/2/20.
 */
//二級导航栏
$(".function-right").hide();
$(".function-list").click(function () {
    $(".function-right").hide();
    $(".function-right-list").hide();
    var activeTab=$(this).attr("rel");
    $(".function-right").show();
    $("."+activeTab).fadeIn();
})
$('.function-list').click(function (e) {
    $('.active').removeClass('active');
    $(this).addClass('active');
})

//三级下拉导航栏
$(".menu").hide();
$(document).ready(function(){

    /* 滑动/展开 */
    $(".expand-list").click(function(){
         var arrow = $(this).find("span.arrow");

         if(arrow.hasClass("right")){

             arrow.removeClass("right");
             arrow.addClass("down");
        }else if(arrow.hasClass("down")){
            arrow.removeClass("down");
            arrow.addClass("right");
         }
        $(this).parent().find(".menu").slideToggle();
    });
})

