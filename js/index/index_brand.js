$(function () {
    $(".search-input input").focus(function () {
        $(".search-input").addClass("active");
    }).blur(function () {
        $(".search-input").removeClass("active");
    });
    $(".search-menu").click(function () {
        if ($(".search").hasClass("active")) {
            $(".search").removeClass("active");
        } else {
            $(".search").addClass("active");
        }
    });
});