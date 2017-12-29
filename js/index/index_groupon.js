$(function() {
  $(".top-nav").on("click", "div", function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
    if ($(this).hasClass("top-nav-right")) {
      $(".groupon-mask").addClass("active");
    } else {
      $(".groupon-mask").removeClass("active");
    }
  });
  $(".groupon-nav").on("click", "div", function() {
      $(this).addClass("active").siblings().removeClass("active");
  });
});
