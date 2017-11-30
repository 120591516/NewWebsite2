/*****************************个人中心*************************************/
function personal_info() {
	var set = JSON.parse(sessionStorage.getItem("set"));
	var loginid = set.id;
	var token =set.token;
	param = {
		userId: loginid,
	}
	sendAjaxTrue(personl_info, param, "json", personalCallBack);
}

function personalCallBack(data) {
	console.info(data);
	if(data.resultcode == 1) {
		var name = data.result.name;
		var sex = data.result.sex;
		var userid = data.result.id;
		var phone = data.result.phone;
		var beizhu = data.result.brief;
		$("#name").html(name);
		if(sex == 0) {
			$("#sex").html("男");
		}
		if(sex == 1) {
			$("#sex").html("女");
		}
		$('#userid').html(userid);
		$('#phone').html(phone);
		$('#beizhu').html(beizhu);
		/*console.log(data);*/

	}
}