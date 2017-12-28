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
});
