// JavaScript Document

function htmlsize() {
    var ww;
    var maxw = 640;
    var minw = 320;
    if ($(window).width() > maxw) {
        ww = maxw;
    } else if ($(window).width() < minw) {
        ww = minw;
    } else {
        ww = $(window).width();
    }
    $("html").css({fontSize: (ww / maxw) * 100});
}
htmlsize();
$(window).resize(htmlsize);

//全局js
$(function () {
    $(".menu").click(function (event) {
        $(".nav_main").toggleClass("show");
        event.stopPropagation();
    });
    $(window).click(function () {
        $(".nav_main").removeClass("show");
    });
});

function winload() {
    $("body").addClass("loaded");
}
