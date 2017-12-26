//出生日期
var selectDateDom = $('#selectDate');
var showDateDom = $('#showDate');
// 初始化时间
var now = new Date();
var nowYear = now.getFullYear();
var nowMonth = now.getMonth() + 1;
var nowDate = now.getDate();
showDateDom.attr('data-year', nowYear);
showDateDom.attr('data-month', nowMonth);
showDateDom.attr('data-date', nowDate);
// 数据初始化
function formatYear(nowYear) {
	var arr = [];
	for(var i = nowYear - 5; i <= nowYear + 5; i++) {
		arr.push({
			id: i + '',
			value: i + '年'
		});
	}
	return arr;
}

function formatMonth() {
	var arr = [];
	for(var i = 1; i <= 12; i++) {
		arr.push({
			id: i + '',
			value: i + '月'
		});
	}
	return arr;
}

function formatDate(count) {
	var arr = [];
	for(var i = 1; i <= count; i++) {
		arr.push({
			id: i + '',
			value: i + '日'
		});
	}
	return arr;
}
var yearData = function(callback) {
	setTimeout(function() {
		callback(formatYear(nowYear))
	})
}
var monthData = function(year, callback) {
	setTimeout(function() {
		callback(formatMonth());
	});
};
var dateData = function(year, month, callback) {
	setTimeout(function() {
		if(/^1|3|5|7|8|10|12$/.test(month)) {
			callback(formatDate(31));
		} else if(/^4|6|9|11$/.test(month)) {
			callback(formatDate(30));
		} else if(/^2$/.test(month)) {
			if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
				callback(formatDate(29));
			} else {
				callback(formatDate(28));
			}
		} else {
			throw new Error('month is illegal');
		}
	});
	// ajax请求可以这样写
	/*
	$.ajax({
	    type: 'get',
	    url: '/example',
	    success: function(data) {
	        callback(data);
	    }
	});
	*/
};
selectDateDom.bind('click', function() {
	var oneLevelId = showDateDom.attr('data-year');
	var twoLevelId = showDateDom.attr('data-month');
	var threeLevelId = showDateDom.attr('data-date');
	var iosSelect = new IosSelect(2, [yearData, monthData], {
		title: '',
		itemHeight: 35,
		relation: [1, 1],
		oneLevelId: oneLevelId,
		twoLevelId: twoLevelId,
		threeLevelId: threeLevelId,
		showLoading: true,
		callback: function(selectOneObj, selectTwoObj, selectThreeObj) {
			showDateDom.attr('data-year', selectOneObj.id);
			showDateDom.attr('data-month', selectTwoObj.id);
			showDateDom.attr('data-date', selectThreeObj.id);
			showDateDom.html(selectOneObj.value + ' ' + selectTwoObj.value + ' ' + selectThreeObj.value);
		}
	});
});


//出生地
var selectContactDom = $('#select_contact');
var showContactDom = $('#show_contact');
var contactProvinceCodeDom = $('#contact_province_code');
var contactCityCodeDom = $('#contact_city_code');
selectContactDom.bind('click', function() {
	var sccode = showContactDom.attr('data-city-code');
	var scname = showContactDom.attr('data-city-name');
	var oneLevelId = showContactDom.attr('data-province-code');
	var twoLevelId = showContactDom.attr('data-city-code');
	var threeLevelId = showContactDom.attr('data-district-code');
	var iosSelect = new IosSelect(3, [iosProvinces, iosCitys, iosCountys], {
		title: '地址选择',
		itemHeight: 35,
		relation: [1, 1, 0, 0],
		callback: function(selectOneObj, selectTwoObj, selectThreeObj) {
			contactProvinceCodeDom.val(selectOneObj.id);
			contactProvinceCodeDom.attr('data-province-name', selectOneObj.value);
			contactCityCodeDom.val(selectTwoObj.id);
			contactCityCodeDom.attr('data-city-name', selectTwoObj.value);
			showContactDom.attr('data-province-code', selectOneObj.id);
			showContactDom.attr('data-city-code', selectTwoObj.id);
			showContactDom.attr('data-district-code', selectThreeObj.id);
			showContactDom.html(selectOneObj.value + ' ' + selectTwoObj.value + ' ' + selectThreeObj.value);
		}
	});
});