$(function() {
  $(".search-input input")
    .focus(function() {
      $(".search-input").addClass("active");
    })
    .blur(function() {
      $(".search-input").removeClass("active");
    });
  $(".search-menu").click(function() {
    if ($(".nav").hasClass("active")) {
      $(".nav").removeClass("active");
    } else {
      $(".nav").addClass("active");
    }
  });
  $(".sequencing-items").click(function() {
      $(this).addClass("active").siblings().removeClass("active");
  });
  $(".shop-follow").click(function () {
    if ($(this).hasClass("followOn")) {
      $(this).find("img").attr("src", "../images/follow_off.png");
      $(this).find("div").eq(0).html("未关注");
      $(this).removeClass("followOn");
    } else {
      $(this).find("img").attr("src", "../images/follow_on.png");
      $(this).find("div").eq(0).html("已关注");
      $(this).addClass("followOn");
    }
  });
});
