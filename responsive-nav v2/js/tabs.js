$(document).ready(function() {
    $(".tabs-menu a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
});

$(".tabs-menu a").hover(function(){
        var tab = $(this).attr("href");
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        $(".tab-item").not(tab).css("display", "none");
        $(tab).fadeIn();
});

$(document).ready(function() {
    $("main").click(function(event) {
        event.preventDefault();
        $(".tab-item").css("display", "none");
        $(".tabs-menu li").removeClass("current");
    });
});
