$(function() {
  $(".groupon-nav-items").on("click", function() {
      $(this).addClass("active").siblings().removeClass("active");
  });

  $(".content-items-right").click(function () {
    $(".shadow").addClass("active");
  });

  $(".bg").click(function () {
    $(".shadow").removeClass("active");
  });
});
