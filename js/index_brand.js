$(function () {
    $(".search-input input").focus(function () {
        $(".search-input").addClass("active");
    }).blur(function () {
        $(".search-input").removeClass("active");
    });
});