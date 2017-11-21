$( document ).ready(function() {
    // 锚点 start
    $(".city_tag1").click(function () {
        var tag1 = $("#cityAnchor1").offset().top -40;
        $("html,body").animate({
            scrollTop: ""+tag1+"px"
        },800,"linear");
    });
    $(".city_tag2").click(function () {
        var tag2 = $("#cityAnchor2").offset().top -40;
        $("html,body").animate({
            scrollTop: ""+tag2+"px"
        },800,"linear");
    });
    $(".city_tag3").click(function () {
        var tag3 = $("#cityAnchor3").offset().top -40;
        $("html,body").animate({
            scrollTop: ""+tag3+"px"
        },800,"linear");
    });
    $(".city_tag4").click(function () {
        var tag4 = $("#cityAnchor4").offset().top -40;
        $("html,body").animate({
            scrollTop: ""+tag4+"px"
        },800,"linear");
    });
    $(".city_tag5").click(function () {
        var tag5 = $("#cityAnchor5").offset().top -40;
        $("html,body").animate({
            scrollTop: ""+tag5+"px"
        },800,"linear");
    });
    $(".city_tag6").click(function () {
        var tag6 = $("#cityAnchor6").offset().top -40;
        $("html,body").animate({
            scrollTop: ""+tag6+"px"
        },800,"linear");
    });
    // 锚点 end
    // 爱心 start
    $(".inside_heart").click(function() {
        $(this).toggleClass("inside_heart_toggle");
    })
    // 爱心 end

    //slider start
    $(window).load(function() {
      $('.flexslider').flexslider({
        animation: "slide",
        controlsContainer: $(".custom-controls-container"),
        customDirectionNav: $(".custom-navigation a")
      });
  });
    // slider end
// $.scrollingParallax('./cut/cloud1.png');
$('#bg1-0').scrollingParallax();
$('#bg1-1').scrollingParallax();
$('#bg1-2').scrollingParallax();
$('#bg1-3').scrollingParallax();
$('#bg1-4').scrollingParallax();
$('#bg1-5').scrollingParallax();
$('#bg1-6').scrollingParallax();
});
