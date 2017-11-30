/**
 * ajax post提交  
 * @param url  
 * @param param  
 * @param datat 为html,json,text  
 * @param callback回调函数  
 * @return  
 */
function sendAjaxTrue(url, param, datat, callback) {
	$.ajax({
		type: "get",
		url: url,
		data: param,
		dataType: datat,
		success: callback,
		error: function(data) {
			console.log(data.msg);
		}
	});
}

function sendAjax(url, param, token, datat, callback) {
	$.ajax({
		type: "get",
		url: url,
		data: param,
		dataType: datat,
		//设置特殊的请求头
		beforeSend: function(request) {
			request.setRequestHeader("token", token);
		},
		success: callback,
		error: function(data) {
			console.log(data.msg);
		}
	});
}
//序列化提交
function httpRequest(httpUrl, httpParam, httpType, async) {
	var reqResult = {
		"result": 0,
		"message": "没有请求服务器或接受到返回值"
	};
	$.ajax({
		url: httpUrl,
		type: httpType,
		async: async,
		data: httpParam,
		dataType: 'json',
		success: function(msg) {
			if(msg.result == 0) {
				alert(msg.message);
				return false;
			}
			reqResult = msg;
			return msg;
		},
		error: function(data) {
			/**
			 * 此处应为弹出公共提示信息窗口
			 * 提示错误信息
			 * 并返回登录页面
			return false;*/
			alert("系统错误，" + data.status);
		}
	});
	return reqResult;
}