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
	
})