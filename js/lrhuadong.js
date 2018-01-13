/*加载完毕事件 在改事件中 写的js代码去获取dom元素 就一定不会出现找不到的问题*/
window.onload=function(){
	left_scroll();
}


function left_scroll(){
	var moveprod=document.querySelector('.seckul');
	var windWidth=document.querySelector('.content_bottom').offsetWidth;
	var ulWidth=moveprod.offsetWidth;
	var minDistance=windWidth-ulWidth;
	var maxDistance=0;

	var startX1=0;
	var moveX1=0;
	var distanceX1=0;
	var delayDistance=50;
	var yzs_transition=function(time){
		moveprod.style.transition='all .'+time+'s';
	}
	var yzs_translate=function(dist){
		moveprod.style.transform='translateX('+dist+'px)';
	}
	//触摸开始
	moveprod.addEventListener('touchstart',function(event){
		startX1=event.touches[0].clientX;
	});
	//触摸中
	moveprod.addEventListener('touchmove',function(event){
		moveX1=event.touches[0].clientX-startX1;
		if((moveX1+distanceX1)>(maxDistance+delayDistance)){
			moveX1=0;
			distanceX1=maxDistance+delayDistance;
		}else if((moveX1+distanceX1)<(minDistance-delayDistance)){
			moveX1=0;
			distanceX1=minDistance-delayDistance;
		}
		yzs_transition(3);
		yzs_translate(moveX1+distanceX1);
	});
	//触摸结束
	moveprod.addEventListener('touchend',function(event){
		distanceX1+=moveX1;
		if(distanceX1>maxDistance){
			distanceX1=maxDistance;
		}else if(distanceX1<minDistance){
			distanceX1=minDistance;
		}
		yzs_transition(4);
		yzs_translate(distanceX1);
	});
}