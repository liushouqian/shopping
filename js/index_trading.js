function scrollNews (obj) {
    var $self = obj.find('ul:first');
    var lineHeight = $self.find('li:first').height();
    $self.animate({ 'margin-top': -lineHeight + 'px' }, 600 , function () {
        $self.css({'margin-top': '0px'}).find('li:first').appendTo($self);
    });
}
function bannerScroll() {
    var bannerItems = $(".banner_items li").length;
    $(".banner_items").css("width", bannerItems*window.screen.width);
    $(".banner_items li").css("width", window.screen.width);
    var num = 0,
        leftSite = 0;
    setInterval(function () {
        leftSite -= window.screen.width;
        $(".banner_items").css("left", leftSite);
        num++;
        if(num == bannerItems) {
            num = 0;
            $(".banner_items").css("left", 0);
            leftSite = 0;
        }
    },3000);
}
$(function () {
    var $this = $('.infomation-right');
    scrollTimer = setInterval(function () {
        scrollNews($this);
    }, 3000);
    bannerScroll();
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
    $(".trading-items li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });
});