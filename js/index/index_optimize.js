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
    var opa = 0;
    $(window).scroll(function () {
        var heightTop = $(document).scrollTop();
        opa = heightTop * 0.005;
        $(".index-search").css("background-color", "rgba(243, 243, 243, " + opa + ")");
        if(opa == 0) {
            $(".index-search").css("background-color", "rgba(0, 0, 0, .2");
        } else if(opa > 0.5) {
            $(".index-search").addClass("active");
            $(".site-logo img").attr("src", "../images/index_site_logo_b.jpg");
            $(".down_arrow img").attr("src", "../images/index_down_arrow_b.jpg");
            $(".message img").attr("src", "../images/index_message_b.jpg");
        } else {
            $(".index-search").removeClass("active");
            $(".site-logo img").attr("src", "../images/index_site_logo.png");
            $(".down_arrow img").attr("src", "../images/index_down_arrow.png");
            $(".message img").attr("src", "../images/index_message.png");
        }
    });
    $(".search-content input").focus(function () {
        $(".search-content").addClass("active");
    }).blur(function () {
        $(".search-content").removeClass("active");
    });
});