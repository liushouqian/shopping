$(function() {
  $(".search-input input")
    .focus(function() {
      $(".search-input").addClass("active");
    })
    .blur(function() {
      $(".search-input").removeClass("active");
    });
  $(".search-menu").click(function() {
    if ($(".search").hasClass("active")) {
      $(".search").removeClass("active");
    } else {
      $(".search").addClass("active");
    }
  });
  $(".sequencing-items").click(function() {
    if ($(this).hasClass("screen-btn")) {
      if ($(".divAll").hasClass("active")) {
        $(".screen-all").addClass("active");
        $(".content-all").addClass("active");
        $(".content-shop").removeClass("active");
        $(".content-outlet").removeClass("active");
      } else if ($(".divShop").hasClass("active")) {
        $(".screen-shop").addClass("active");
        $(".content-all").removeClass("active");
        $(".content-shop").addClass("active");
        $(".content-outlet").removeClass("active");
      } else if ($(".divOutlet").hasClass("active")) {
        $(".screen-outlet").addClass("active");
        $(".content-all").removeClass("active");
        $(".content-shop").removeClass("active");
        $(".content-outlet").addClass("active");
      }
    } else {
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active");
    }
  });
  $(".three-nav-items").click(function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
    if ($(this).hasClass("divAll")) {
      $(".content-all").addClass("active");
      $(".content-shop").removeClass("active");
      $(".content-outlet").removeClass("active");
    } else if ($(this).hasClass("divShop")) {
      $(".content-all").removeClass("active");
      $(".content-shop").addClass("active");
      $(".content-outlet").removeClass("active");
    } else if ($(this).hasClass("divOutlet")) {
      $(".content-all").removeClass("active");
      $(".content-shop").removeClass("active");
      $(".content-outlet").addClass("active");
    }
  });
  $(".content-score ul li").click(function() {
    var lis = $(this)
      .parent()
      .children();
    var tempnum = $(this)
      .find("a")
      .text();
    for (var i = 0; i < lis.length; i++) {
      lis[i].className = i < tempnum ? "light" : "";
    }
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
  $(".clear-search-bg").click(function () {
    $(".screen-all").removeClass("active");
    $(".screen-shop").removeClass("active");
    $(".screen-outlet").removeClass("active");
  });
});
