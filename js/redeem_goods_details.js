$(function() {
  $(".search-menu").click(function() {
    if ($(".search").hasClass("active")) {
      $(".search").removeClass("active");
    } else {
      $(".search").addClass("active");
    }
  });
  $(".add").click(function() {
    var num = parseInt($(".btn-group input").val());
    num++;
    $(".btn-group input").val(num);
  });
  $(".minus").click(function() {
    var num = parseInt($(".btn-group input").val());
    num--;
    if (num < 0) {
        num = 0;
    }
    $(".btn-group input").val(num);
  });
});
