$(function() {
  $(".groupon-nav-items").on("click", function() {
      $(this).addClass("active").siblings().removeClass("active");
  });
});
