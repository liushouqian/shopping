$(function() {
  $(".top-nav").on("click", "div", function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
    if ($(this).hasClass("top-nav-right")) {
      $(".groupon-mask").addClass("active");
      $(".groupon-status").html("");
    } else {
      $(".groupon-mask").removeClass("active");
      $(".groupon-status").html("正在疯抢中...");
    }
  });
  $(".groupon-nav").on("click", "div", function() {
      $(this).addClass("active").siblings().removeClass("active");
  });
});
