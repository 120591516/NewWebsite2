/**
 * 展示框
 */
function toast(title, tip, hrefContent) {
	if(tip == null || tip == "") {
		tip = "信息提示";
	}
	if(hrefContent == null || hrefContent == "") {
		hrefContent = "javascript:;";
	}
	if(hrefContent == "window.history.go(-1);") {
		hrefContent = "javascript:window.history.go(-1);";
	}
	$("#hrefContent").attr("href", hrefContent);
	$('#tip').html(tip);
	$('#content').html(title);
	$('#dialog2').show().on('click', '.weui_btn_dialog', function() {
		$('#dialog2').off('click').hide();
	});
}
/**
 * 多项展示框
 * @param title 内容
 * @param tip 标题
 * @param url 地址
 */
function toas1(title, tip, url) {
	if(tip == null || tip == "") {
		tip = "信息提示";
	}
	$('#tip1').html(tip);
	$('#content1').html(title);
	$('#con').show();
	$('#can').show();
	$('#dialog1').show().on('click', '.weui_btn_dialog', function(e) {
		$('#dialog1').off('click').hide();
		$('#con').off('click').hide();
		$('#can').off('click').hide();
	});
	if(url == null || url == "") {
		url = "";
	} else {
		$("#con").click(function() {
			console.info(url);
			window.location.href = url;
		});
	}
}
/**
 * 多项展示框
 * @param title 内容
 * @param tip 标题
 * @param callback 地址
 */
function toastCallBack(title, tip, callback) {
	if(tip == null || tip == "") {
		tip = "信息提示";
	}
	$('#tip1').html(tip);
	$('#content1').html(title);
	$('#con').show();
	$('#can').show();
	$('#dialog1').show().on('click', '.weui_btn_dialog', function(e) {
		$('#dialog1').off('click').hide();
		$('#con').off('click').hide();
		$('#can').off('click').hide();
	});
	if(callback == null || callback == "") {
		callback = "";
	} else {
		$("#con").click(function() {
			callback();
		});
	}
}
/**
 * 定时加载匡
 * @param content  内容
 */
function toastTimeout(content) {
	$('#showContent').html(content);
	$('#loadingToast').show();
	setTimeout(function() {
		$('#loadingToast').hide();
	}, 1000);
}
/**
 * 加载匡
 * @param content  内容
 */
function toastLoading(content) {
	$('#showContent').html(content);
	$('#loadingToast').show();
}
/**
 * 关闭加载匡
 */
function ClosetoastLoading() {
	$('#loadingToast').hide();
}
/**
 * 错误提示框
 */
function errorTip() {
	toast("您的网络状况不好，请更换网络");
}