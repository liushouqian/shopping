$(function() {
  $(".groupon-nav-items").on("click", function() {
      $(this).addClass("active").siblings().removeClass("active");
      if ($(".groupon-nav-items").eq(0).hasClass("active")) {
        $(".optimize-type").addClass("active");
        $(".soon-start").removeClass("active");
      } else {
        $(".optimize-type").removeClass("active");
        $(".soon-start").addClass("active");
      }
  });
});
