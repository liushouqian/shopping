$(function() {
  $(".search-input input")
    .focus(function() {
      $(".search-input").addClass("active");
    })
    .blur(function() {
      $(".search-input").removeClass("active");
    });
  $(".sequencing-items").click(function() {
    if ($(this).hasClass("screen-btn")) {
      if ($(".divAll").hasClass("active")) {
        $(".screen-all").addClass("active");
      } else if ($(".divShop").hasClass("active")) {
        $(".screen-shop").addClass("active");
      } else if ($(".divOutlet").hasClass("active")) {
        $(".screen-outlet").addClass("active");
      }
    } else {
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active");
    }
  });
  $(".divAll").click(function() {
    $(".four1").html("销售");
    $(".four2").html("人气");
    $(".four3").html("价格");
  });
  $(".divShop").click(function() {
    $(".four1").html("销售");
    $(".four2").html("人气");
    $(".four3").html("价格");
  });
  $(".divOutlet").click(function() {
    $(".four1").html("综合");
    $(".four2").html("评分");
    $(".four3").html("距离");
  });
  $(".three-nav-items").click(function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
  });
  $(".new-search-delect").click(function() {
    $(".clearSearch").addClass("active");
  });
  $(".clear-search-alert-cancle").click(function() {
    $(".clearSearch").removeClass("active");
  });
  $(".clear-search-bg").click(function() {
    $(".clearSearch").removeClass("active");
    $(".screen-all").removeClass("active");
    $(".screen-shop").removeClass("active");
    $(".screen-outlet").removeClass("active");
  });
  $(".clear-search-alert-ok").click(function() {
    $(".clearSearch").removeClass("active");
    $(".new-search-content").empty();
  });
  $(".screen-all-3-2").click(function() {
    $(this)
      .parent()
      .siblings()
      .addClass("active");
  });
  $(".screen-all-3-content-items").click(function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
  });
  $(".screen-reset").click(function() {
    $(".minimum").val("");
    $(".maximum").val("");
    $(".screen-all-3-content-items").removeClass("active");
  });
});
