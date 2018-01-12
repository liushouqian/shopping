function scrollNews (obj) {
    var $self = obj.find('ul:first');
    var lineHeight = $self.find('li:first').height();
    $self.animate({ 'margin-top': -lineHeight + 'px' }, 600 , function () {
        $self.css({'margin-top': '0px'}).find('li:first').appendTo($self);
    });
}
function renderBanner(bannerList) {
    var html = '<ul class="slider-list">';
    $.each(bannerList, function(index, item) {
      var url =
        item["url"].match(/./) == "/"
          ? "https://simu.dahuo.la" + item["url"]
          : item["url"];
      html +=
        '<li class="slider-item openParam" data-param="' +
        url +
        '"' +
        'data-baidu-action="banner" data-baidu-label="' +
        (parseInt(index) + 1) +
        '">' +
        '<div class="img-wrap"><img class="banner-image" src="' +
        item["image"] +
        '"/></div></li>';
    });
    html += "</ul>";
    return html;
  }
$(function () {
    var bannerList = [
        {
          image: "../images/index_banner.png",
          url: "../images/index_banner.png"
        },
        {
          image: "../images/index_banner.png",
          url: "../images/index_banner.png"
        },
        {
          image: "../images/index_banner.png",
          url: "../images/index_banner.png"
        },
        {
          image: "../images/index_banner.png",
          url: "../images/index_banner.png"
        }
      ];
      var bannerHTML = renderBanner(bannerList);
      $("#banner").html(bannerHTML);
      $("#banner").slider({
        autoScroll: true,
        infinite: true
      });
    var $this = $('.infomation-right');
    scrollTimer = setInterval(function () {
        scrollNews($this);
    }, 3000);
    $(".enterprise-content-follow").click(function () {
        if ($(this).hasClass("on")) {
            $(this).find("img").attr("src", "../images/follow_off.png");
            $(this).find("div").html("未关注");
            $(this).removeClass("on");
        } else {
            $(this).find("img").attr("src", "../images/follow_on.png");
            $(this).find("div").html("已关注");
            $(this).addClass("on");
        }
    });
    
    $(".redeem-content").css("width", $(".redeenm-content-items").width() * $(".redeenm-content-items").length + $(".redeenm-content-items").length * 4);

    $(".redeenm-content-items").click(function () {
        $(".redeem-alert").addClass("active");
    });

    $(".redeem-alert-bg").click(function () {
        $(".redeem-alert").removeClass("active");
    });

    $(".redeem-alert-content-ok").click(function () {
        $(".redeem-alert").removeClass("active");
    });
});