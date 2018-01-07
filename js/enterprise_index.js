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