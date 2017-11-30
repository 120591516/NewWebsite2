/****************************首页-医疗咨询**************************************/
$(function() {
	var channelId;
	param = {
		channelId: "09ecced8-9eac-449f-81ff-9dd18e34eda6",
	}
	sendAjaxTrue(index_news, param, "json", indexnewCallBack);
})

function indexnewCallBack(data) {
	/*console.log(data);*/
	/*console.log(data.result.top);*/
	var htmls_list_top = [];
	var htmls_list_list = [];
	var htmls_top = [];
	if(data.result.top == undefined || data.result.list.top==undefined || data.result.list.list==undefined) {
		var channelId;
		param = {
			channelId: "09ecced8-9eac-449f-81ff-9dd18e34eda6",
		}
		sendAjaxTrue(index_news, param, "json", indexnewCallBack);
	}
	$.each(data.result.top, function(i, item) {

		htmls_top += [
			'<a href="/news/details.html?id=' + item.id + '" target="_blank">',
			'<p class="index_tz_hover">' + item.title + '</p>',
			'</a>'
		].join("");
		$("#index_top_new").html(htmls_top);
	});

	$.each(data.result.list.top, function(i, item) {
		htmls_list_top += [
			'<a href="/news/details.html?id=' + item.id + '" target="_blank">',
			'<div class="new-col-4">',
			'<img src="' + item.image + '" />',
			'<p class="new-box-p">' + item.title + '</p>',
			'</div>',
			'</a>'
		].join("");
		$(".index_new_top").html(htmls_list_top);
	});

	$.each(data.result.list.list, function(i, item) {
		htmls_list_list += [
			'<a href="/news/details.html?id=' + item.id + '" target="_blank">',
			'<p class="new-box-p">' + item.title + '</p>',
			'</a>'
		].join("");
		$(".index_new_bottom").html(htmls_list_list);
	});

}