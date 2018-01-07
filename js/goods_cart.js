//侧滑显示删除按钮
var expansion = null; //是否存在展开
var container = document.querySelectorAll('.shopcat_commodity .shopcart_detail_slip ');
for(var i = 0; i < container.length; i++) {
	var x, y, X, Y, swipeX, swipeY;
	container[i].addEventListener('touchstart', function(event) {
		x = event.changedTouches[0].pageX;
		y = event.changedTouches[0].pageY;
		swipeX = true;
		swipeY = true;
		if(expansion) { //判断是否展开，如果展开则收起
			expansion.className = "shopcart_detail";
		}
	});
	container[i].addEventListener('touchmove', function(event) {

		X = event.changedTouches[0].pageX;
		Y = event.changedTouches[0].pageY;
		// 左右滑动
		if(swipeX && Math.abs(X - x) - Math.abs(Y - y) > 0) {
			// 阻止事件冒泡
			event.stopPropagation();
			if(X - x > 10) { //右滑
				event.preventDefault();
				this.className = "shopcart_detail"; //右滑收起
			}
			if(x - X > 10) { //左滑
				event.preventDefault();
				this.className = "shopcart_detail swipeleft"; //左滑展开
				expansion = this;
			}
			swipeY = false;
		}
		// 上下滑动
		if(swipeY && Math.abs(X - x) - Math.abs(Y - y) < 0) {
			swipeX = false;
		}
	});
}

$(function() {
	//	全选+按钮
	$(".select_icon").toggle(
		function() {
			$(this).css('background-image', 'url(../images/ellipse_on.png)');
		},
		function() {
			$(this).css('background-image', 'url(../images/ellipse_off.png)');
		}
	);
	$(".select_icon_all").on("click", function() {
		if($(this).css('background-image', 'url') == '../images/ellipse_off.png') {
			$(".select_icon").css('background-image', 'url(../images/ellipse_on.png)');
			alert(1);
		} else {
			$(".select_icon").css('background-image', 'url(../images/ellipse_off.png)');
			alert(2);
		}
	})

	$(".select_icon_all").toggle(
		function() {
			$(".select_icon").css('background-image', 'url(../images/ellipse_on.png)');
		},
		function() {
			$(".select_icon").css('background-image', 'url(../images/ellipse_off.png)');
		}
	);

	//	购物车开启弹窗
	$('.specification').on("click", function() {
		$('.mask').show();
		$('#speccontent').show();

	})
	//	购物车关闭弹窗

	$('#back').on("click", function() {
		$('.mask').hide();
		$('#speccontent').hide();
	})

	//规格选中
	$('.prod-spec ul li').on("click", function() {
		$(this).addClass('prod-spec-back').siblings().removeClass('prod-spec-back');

	})

	//加的效果
	$(".num").click(function() {
		var n = $(this).next().val();
		var num = parseInt(n) + 1;
		if(num == 0) {
			return;
		}
		$(this).next().val(num);
	});
	//减的效果
	$(".reduce").click(function() {
		var n = $(this).prev().val();
		var num = parseInt(n) - 1;
		if(num == 0) {
			return
		}
		$(this).prev().val(num);
	});
	
//	我的订单
	$('.menu_icon').on("click", function() {
		$('#search_box').hide();
		$('#order_nav').show();
	})
	$('.menu_icon').toggle(
	 function(){
	 	$('#search_box').hide();
  		$('#order_nav').show();
	 },
	 function(){
  		$('#search_box').show();
  		$('#order_nav').hide();
	})
	
//	个人信息上传头像
	$('#file_upload').on('click', function(e) {
    e.preventDefault();
    $(this).closest('input[type=file]').trigger('click');
})
	
//	日历
	$('#selectDate').on('click', function(e) {
    	$('.mask').show();
})
//	发票
	
	$('#company_invoicea').on('click', function(e) {
		$(this).addClass('me_package2').siblings().removeClass('me_package2');
    	$('#company_invoice').show();
    	$('#personal_invoice').hide();
})
	$('#personal_invoicea').on('click', function(e) {
		$(this).addClass('me_package2').siblings().removeClass('me_package2');
    	$('#company_invoice').hide();
    	$('#personal_invoice').show();
})
//	抬头发票
	$('#rise_invoicea').on('click', function(e) {
			$(this).addClass('me_package2').siblings().removeClass('me_package2');
	    	$('.me_invoice').hide();
	    	$('.rise_invoice').show();
    	$('.me_cart_invoice').show();
	})
	$('#me_invoicea').on('click', function(e) {
		$(this).addClass('me_package2').siblings().removeClass('me_package2');
    	$('.me_invoice').show();
    	$('.rise_invoice').hide();
    	$('.me_cart_invoice').hide();
	})
//	关注
	
	$('.shop_xiangqing_icon').on('click', function(e) {
		$(this).toggleClass('shop_xiangqing_icon1')
	})
//	地址
	$('#select_contact').on('click', function(e) {
    	$('.mask').show();
	})
//	支付页面
	$('#hank').on('click', function(e) {
    	$('.mask').show();
    	$('#pay_hank').show();
	})
	$('.hank_no').on('click', function(e) {
    	$('.mask').hide();
    	$('.spec-menu-content').hide();
	})
	$('#pay_paword').on('click', function(e) {
    	$('.mask').show();
    	$('#pay_hank_pasword').show();
	})
//	充值
	
	$('#rech_paword').on('click', function(e) {
    	$('.mask').show();
    	$('#rech_hank').show();
	})
	$('#rech_menu').on('click', function(e) {
    	$('#rech_hank').hide();
    	$('#pay_hank_pasword').show();
	})
	//提现
	
	$('#with_paword').on('click', function(e) {
    	$('.mask').show();
    	$('#pay_hank_pasword').show();
	})
	//我的卡包
	
	$('.package_car_clsoe').on('click', function(e) {
    	$('.mask').hide();
        $('.me_pack').show();
		$('.package_car').hide();
	})
	$('.me_pack').on('click', function(e) {
    	$(this).children('.me_cart_report').show();
	})
	//一直点击
	$(function() {

			var _switch = false;
			var _time = null;
			$('#me_pack2').on({
				"touchstart": function() {
					_time = setTimeout(function() {
						$('.mask').show();
			            $('.me_pack').hide();
						$('.package_car').show();
					}, 500);
				},
				"touchmove": function() {
					clearTimeout(_time);
					_switch = true;
				},
				"touchend": function() {
					clearTimeout(_time);
					if(_switch) {
						_switch = false;
						return;
					} else {
					}
				}
			});
		})
//	登录注册
	$('#xuan2').on('click', function(e) {
    	$(this).toggleClass('xuan3')
	})
//	我的礼品
	
	$('.me_pack_gift').on('click', function(e) {
    	$('.mask').show();
		$('.package_car').show();
	})
	
	//	关注商品
	
	$('.optimize_md').on('click', function(e) {
    	$(this).parent().find('.select_iconstio').toggleClass('select_icon2');
    	if ($('.atten_zuosi').show()) {
    		$('.atten_zuosi').show();
    	}
		
	})
	$('.select_icon3').on('click', function(e) {
    	
    	if ($('.optimize-items .select_iconstio').hasClass('select_icon2')) {
    		$('.select_iconstio').removeClass('select_icon2');
    	}
    	$('.select_iconstio').addClass('select_icon2');
		
	})
	
});

//星星评价
var num=finalnum = tempnum= 0;
var lis = document.getElementsByTagName("li");
//num:传入点亮星星的个数
//finalnum:最终点亮星星的个数
//tempnum:一个中间值
function fnShow(num) {
 finalnum= num || tempnum;//如果传入的num为0，则finalnum取tempnum的值
 for (var i = 0; i < lis.length; i++) {
  lis[i].className = i < finalnum? "light" : "";//点亮星星就是加class为light的样式
 }
}
for (var i = 1; i <= lis.length; i++) {
 lis[i - 1].index = i;
 lis[i - 1].onmouseover = function() { //鼠标经过点亮星星。
  fnShow(this.index);//传入的值为正，就是finalnum
 }
 lis[i - 1].onmouseout = function() { //鼠标离开时星星变暗
  fnShow(0);//传入值为0，finalnum为tempnum,初始为0
 }
 lis[i - 1].onclick = function() { //鼠标点击,同时会调用onmouseout,改变tempnum值点亮星星
  tempnum= this.index;
 }
}