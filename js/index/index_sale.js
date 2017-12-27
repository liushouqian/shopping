$(function() {
  $(".groupon-nav").on("click", "div", function() {
      $(this).addClass("active").siblings().removeClass("active");
  });
});
