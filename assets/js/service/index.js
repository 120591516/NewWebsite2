/*************************定制服务以及企业服务的表单提交**************************************/
function fa_submit() {
	var from_info = JSON.parse(sessionStorage.getItem("set"));
	if(from_info != "" && from_info != null) {
		$("#userid").val(from_info.id);
		$("#username").val(from_info.name);
	}
	$.ajax({
		cache: true,
		type: "POST",
		url: form_submit,
		data: $('#formid').serialize(), // 你的formid
		async: false,
		error: function(request) {
			console.log("请求失败");
		},
		success: function(data) {
			if(from_info == "" || from_info == null) {
				if(confirm("很抱歉您还没有登录，是否先去登录？")) {
					$(".login_login").removeClass("hide");
				} else {
					return false;
				}
			} else {
				$("#formid input").val("");
				$("#formid textarea").val("");
				alert(data.msg);
			}
		}
	});
}