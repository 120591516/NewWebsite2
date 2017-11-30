/*****************************医疗咨询-发表评论********************************/
/*$(function() {
	String.prototype.GetValue = function(parm) {
		var reg = new RegExp("(^|&)" + parm + "=([^&]*)(&|$)");
		var r = this.substr(this.indexOf("\?") + 1).match(reg);
		if(r != null)
			return decodeURI(r[2]);
		return null;
	}
	var newid = window.location.href.GetValue("id");
	param = {
		id: newid,
	}
	sendAjaxTrue(news_fb, param, "json", pinglunCallBack);
})*/
function fabiao_btn() {

	var from_info = JSON.parse(sessionStorage.getItem("set"));
	if(from_info != "" && from_info != null) {
		var id = from_info.id;
		var name = from_info.name;
		String.prototype.GetValue = function(parm) {
			var reg = new RegExp("(^|&)" + parm + "=([^&]*)(&|$)");
			var r = this.substr(this.indexOf("\?") + 1).match(reg);
			if(r != null)
				return decodeURI(r[2]);
			return null;
		}
		var newid = window.location.href.GetValue("id");
		param = {
			creatorId: id,
			creatorName: name,
			content: $("#textarea").val(),
			device: 5,
			informationId: newid,
			p: 1,
		}
		sendAjaxTrue(news_send, param, "json", fbCallBack);
	} else {
		if(confirm("很抱歉您还没有登录，是否先去登录？")) {
			$(".login_login").removeClass("hide");
		}
	}

}

function fbCallBack(data) {
	/*alert(data.msg);*/
	$("#textarea").val("");
	/*String.prototype.GetValue = function(parm) {
		var reg = new RegExp("(^|&)" + parm + "=([^&]*)(&|$)");
		var r = this.substr(this.indexOf("\?") + 1).match(reg);
		if(r != null)
			return decodeURI(r[2]);
		return null;
	}
	var newid = window.location.href.GetValue("id");
	param = {
		id: newid,
	}*/
	/*sendAjaxTrue(news_fb, param, "json", pinglunCallBack);*/
	init_page();

}