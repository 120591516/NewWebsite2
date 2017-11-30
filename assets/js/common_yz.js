//var ip = 'http://localhost/jphs-https-service'
/*var ip = "http://192.168.7.112:8080";*/
var ip = 'https://s.jinpaihushi.com';
/*var ip = 'http://192.168.7.114:8080';*/
var yuming = 'https://www.jinpaihushi.com';
var loginurl = ip + '/regist/sendMassage.json'; //短信验证码
var imagecodeurl = ip + '/authImage/verifyCode.jhtml'; //图片验证码
var login = ip + '/login/quickLogin.json'; //登录
var personl_info = ip + '/user/getUserDetail.json'; //个人信息
var edit_info = ip + '/user/updateUserInfo.json'; //编辑信息
var index_news = ip + '/information/getHomeInformation.json'; //首页医疗咨询
var form_submit = ip + '/customService/createService.json'; //服务表单提交
var news_fb = ip + '/information/getInformationEvaluate.json'; //咨询发表评论列表
var news_xq = ip + '/information/getInformationDetail.json'; //咨询详情
var news_send = ip + '/information/sendEvaluate.json'; //咨询发表
var news_lists = ip + '/information/getInformationList.json'; //新闻列表

var goods_detail_evaluate = ip + '/goods/getGoodsEvaluation.json';

var user_order_list = ip + '/order/getUserOrder.json'; //个人中心--我的订单
var user_order_detail = ip + '/order/getUserOrderDetail.json'; //个人中心--我的订单--订单详情
/**
 * 获取url参数 调用的时候 var orderId = GetRequest()['参数名'];
 */

function  GetRequest()  {      
	var  url  =  location.search;  //获取url中"?"符后的字串   
	var  theRequest  =  new  Object();      
	if (url.indexOf("?")  !=  -1)  {         
		var  str  =  url.substr(1);         
		strs  =  str.split("&");         
		for(var  i  =  0;  i  <  strs.length;  i ++)  {            
			theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);         
		}      
	}      
	return  theRequest;   
}
/**
 * 根据判断是否是空串
 * @param id
 * @returns {Boolean}
 */
function IdVal(id) {
	var str = $("#" + id).val();
	if(str == "") {
		return true;
	} else {
		return false;
	}
}
//动态改变时间
function CountDown() {
	if(boo == false) {
		maxtime = 59;
		boo = true;
	}
	if(maxtime > 0) {
		seconds = Math.floor(maxtime % 60);
		msg = seconds + "秒"; //动态显示剩余时间。
		document.all["code_btn"].innerHTML = msg;
		maxtime = maxtime - 1;

	} else {
		clearInterval(timer);
		document.all["code_btn"].innerHTML = '获取验证码';
	}
}
//转时间格式
function getDateTime(date) {
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var hh = date.getHours();
	var mm = date.getMinutes();
	var ss = date.getSeconds();
	return year + "-" + month + "-" + day + " " + hh + ":" + mm + ":" + ss;
}

function getDateTime2(date) {
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	return year + "-" + month + "-" + day;
}
//登录
var i = 0;

function public_login() {
	i = i + 1;
	var tel = $('#phoneCode').val();
	if(IdVal("phoneCode")) {
		$('.msg').html("*请填写手机号");
		return;
	}
	if(!/^1[3|5|7|8]\d{9}$/.test(tel)) {
		$('.msg').html("*请输入正确的电话号码");
		return;
	}
	if(IdVal("code")) {
		$('.msg_code').html("*请填写验证码");
		return;
	}
	if(i >= 3) {
		$(".login_imagecode").show();
		$("#images_btn").attr("src", imagecodeurl);
		if(IdVal("code_img")) {
			$('.msg_code').html("*请填写验证码");
			return;
		}
		param = {
			phone: $("#phoneCode").val(),
			smsCode: $("#code").val(),
			validateCode: $("#code_img").val(),
			type: 1,
			device:5,
		}
		sendAjaxTrue(login, param, "json", loginCodeCallBack);

	}

	param = {
		phone: $("#phoneCode").val(),
		smsCode: $("#code").val(),
		type: 1,
	}
	localStorage.clear();
	sendAjaxTrue(login, param, "json", loginCodeCallBack);

}

function loginCodeCallBack(data) {
	if(data.resultcode == "0") {
		$('.msg_code').html(data.msg);
		return;
	}
	var userValue = '{"phone":"' + data.result.phone + '","id":"' + data.result.id + '","token":"' + data.result.token + '","name":"' + data.result.name + '"}';
	localStorage.setItem("set", userValue);
	sessionStorage.setItem("set", userValue);
	var set = JSON.parse(localStorage.getItem("set"));
	var phone = set.phone;
	$(".login_login").addClass("hide");
	$(".header_login").hide();
	$(".header_zhuce").removeClass("hide");
	$(".header_personal").removeClass("hide");
	$(".header_personal").html("欢迎：" + phone);

}
/**
 * 点击获取验证码
 * 
 * 
 */
function getCode() {
	var tel = $('#phoneCode').val();
	if(IdVal("phoneCode")) {
		$('.msg').html("*请填写手机号");
		return;
	}
	if(!/^1[3|5|7|8]\d{9}$/.test(tel)) {
		$('.msg').html("*请输入正确的电话号码");
		return;
	}
	//电话号码填写正确  可以发送短信验证码
	else {
		if($('#code_btn').html() == "获取验证码") {
			$('#code_btn').html("60秒");
			boo = false;
			timer = setInterval("CountDown()", 1000);
			param = {
				phone: $("#phoneCode").val(),
			}
			var otype = "get";
			var osync = false;
			httpRequest(loginurl, param, otype, osync);
		}
	}
}

function getimgcode(obj) {
	$(obj).attr("src", imagecodeurl + "?" + Math.random());
}

function islogin() {
	var set = JSON.parse(localStorage.getItem("set"));
	console.info(set)
	if(set != null && set != '') {
		var phone = set.phone;
		$(".header_login").hide();
		$(".header_personal").removeClass("hide");
		$(".header_personal").html("欢迎：" + phone);
		$(".header_zhuce").removeClass("hide");
	}
}
/*******************************登录-退出*******************************************/
function public_edit() {
	localStorage.clear();
	sessionStorage.clear();
	window.location.href = "/index.html";
}

/*
 *
 * 个人中心 -- 我的订单
 * */
function user_order() {
	var from_info = JSON.parse(sessionStorage.getItem("set"));
	if(from_info != "" && from_info != null) {
		var id = from_info.id;
		param = {
			userId: id,
		}
		sendAjaxTrue(user_order_list, param, "json", userOrderCallback);
	}
}
/*
 *
 * 个人中心 -- 我的订单 --数据回显
 * */
function userOrderCallback(data) {
	console.info(data);
	if(data.resultcode != 1) {
		alert(data.msg);
	} else if(data.resultcode == 1) {
		if(data.result.list == 0) htmls_list_add="暂无数据!!!";
		var htmls_list_add = '';
		$.each(data.result.list, function(i, item) {
			htmls_list_add += '<div class="order_lists">';
			htmls_list_add += '<p class="order_lists_status">';
			htmls_list_add += '<span>' + getDateTime(new Date(item.create_time.time)) + '</span>';
			htmls_list_add += '<span>订单号：' + item.order_no + '</span>';
			htmls_list_add += '</p>';
			htmls_list_add += '<div class="order_lists_xq">';
			htmls_list_add += '<div style="width: 414px;">';
			htmls_list_add += '<div class="public-cell" style="margin: 0;padding: 0;">';
			htmls_list_add += '	<img style="width: 80px;" src="' + item.url + '" />';
			htmls_list_add += '<section class="public_primary">';
			htmls_list_add += '	<h1><a href="/personal/details.html?id=' + item.id + '">' + item.title + '</a></h1>';
			htmls_list_add += '	<p>' + item.sub_title + '</p>';
			htmls_list_add += '</section>';
			htmls_list_add += '</div>';
			htmls_list_add += '</div>';
			htmls_list_add += '<div style="width: 136px;">';
			htmls_list_add += item.pay_price + '/次';
			htmls_list_add += '</div>';
			htmls_list_add += '<div style="width: 136px;">';
			if(item.pay_type == 1) {
				htmls_list_add += '付款方式<br />';
				htmls_list_add += '支付宝';
			}
			if(item.pay_type == 2) {
				htmls_list_add += '付款方式<br />';
				htmls_list_add += '微信';
			}
			if(item.pay_type == 3) {
				htmls_list_add += '付款方式<br />';
				htmls_list_add += '余额';
			}
			if(item.pay_type == 4) {
				htmls_list_add += '付款方式<br />';
				htmls_list_add += '银联';
			}
			if(item.pay_type == 5) {
				htmls_list_add += '付款方式<br />';
				htmls_list_add += 'vip卡支付';
			}
			htmls_list_add += '</div>';
			htmls_list_add += '<div style="width: 154px;">';
			if(item.SCHEDULE == 0) {
				htmls_list_add += '	待付款<br />';
			} else
			if(item.SCHEDULE == 1) {
				htmls_list_add += '待接单<br />';
			}
			if(item.SCHEDULE == 2) {
				htmls_list_add += '已接单<br />';
			}
			if(item.SCHEDULE == 3) {
				htmls_list_add += '执行中<br />';
			}
			if(item.SCHEDULE == 4) {
				htmls_list_add += '待确定<br />';
			}
			if(item.SCHEDULE == 5) {
				htmls_list_add += '已完成<br />';
			}
			if(item.SCHEDULE == 6) {
				htmls_list_add += '已取消<br />';
			}
			if(item.SCHEDULE == 7) {
				htmls_list_add += '申诉中<br />';
			}
			if(item.SCHEDULE == 8) {
				htmls_list_add += '已失效<br />';
			}
			htmls_list_add += '	订单详情';
			htmls_list_add += '</div>';
			htmls_list_add += '<div style="width: 144px;">';
			if(item.SCHEDULE == 0) {
				htmls_list_add += '	<button>立即支付</button>';
			}
			htmls_list_add += '	</div>';
			htmls_list_add += '</div>';
			htmls_list_add += '</div>';
		})
		$(".order_lists").empty().append(htmls_list_add);
	}
}