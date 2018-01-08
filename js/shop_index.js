function bannerScroll() {
  var bannerItems = $(".banner_items li").length;
  $(".banner_items").css("width", bannerItems*window.screen.width);
  $(".banner_items li").css("width", window.screen.width);
  var num = 0,
      leftSite = 0;
  setInterval(function () {
      leftSite -= window.screen.width;
      $(".banner_items").css("left", leftSite);
      num++;
      if(num == bannerItems) {
          num = 0;
          $(".banner_items").css("left", 0);
          leftSite = 0;
      }
  },3000);
}



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
  bannerScroll();
});
