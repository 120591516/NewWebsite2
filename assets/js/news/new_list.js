/************************医疗咨询（列表）**********************************/
var num = 1;
$(function() {
	param = {
		channelId: "09ecced8-9eac-449f-81ff-9dd18e34eda6",
	}
	sendAjaxTrue(news_lists, param, "json", newslist);
})

function newslist(data) {
	console.log(data);
	if(data.result.list.pages <= 1) {
		$(".lists_more_btn").hide();
	} else {
		$(".lists_more_btn").show();
	}
	var htmls_top = [];
	var htmls_list = [];

	$.each(data.result.top, function(i, item) {
		htmls_top += [
			'<div class="new_lists_img">',
			'<a href="/news/details.html?id=' + item.id + '" target="_blank">',
			'<img src="' + item.image + '" />',
			'</a>',
			'<p>' + item.title + '</p>',
			'</div>'
		].join("");
		$("#new_lists_imgs").html(htmls_top);
	})
	$.each(data.result.list.list, function(i, item) {

		var str = item.brief; //原始字符串
		var str1 = item.title;
		var s = str; //要展示的字符串
		var s1 = str1;
		if(str.length > 65) {
			s = str.substring(0, 65) + "...";
		}
		if(str1.length > 45) {
			s1 = str1.substring(0, 45) + "...";
		}

		htmls_list += [
			'<div class="st_pj_container new_lists_num">',
			'<a href="/news/details.html?id=' + item.id + '" target="_blank">',
			'<div class="new_details_img">',
			'<img src="' + item.image + '" />',
			'</div>',
			'<div class="public_primary new_lists_h1">',
			'<h1>' + s1 + '</h1>',
			'<div id="new_lists_content">' + s + '</div>',
			'<div class="new_lists_time">',
			'<time>' + getDateTime2(new Date(item.createTime.time)) + '</time>',
			'<span id="new_source">' + item.source + '</span>',
			'<span class="share">',
			'<a href="http://service.weibo.com/share/share.php?url=' + yuming + '/news/details.html?id=' + item.id + '&title=' + item.title + '&pic=' + item.image + '" class="weibo" target="_blank">',
			'<i class="iconfont icon-weibo"></i>',
			'</a>',
			'<a href="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=' + yuming + '/news/details.html?id=' + item.id + '&title=' + item.title + '&desc=' + item.title + '&summary=' + item.title + '&pics=' + item.image + '" class="kongjian" target="_blank">',
			'<i class="iconfont icon-kongjian"></i>',
			'</a>',
			'</span>',
			'</div>',
			'</div>',
			'</a>',
			'</div>'
		].join("");
		$("#newlist").html(htmls_list);
		/*************新闻资讯-微信弹出****************/
		$(".new_lists_img").mouseover(function() {
			$(this).find("p").show();
		})
		$(".new_lists_img").mouseout(function() {
			$(this).find("p").hide();
		})
		$(".icon-weixin").mouseover(function() {
			$(this).parent().find(".panel-weixin").show();
		})
		$(".icon-weixin").mouseout(function() {
			$(".panel-weixin").hide();
		})
	})

}

function lists_more_btn() {
	num++;
	param = {
		channelId: "09ecced8-9eac-449f-81ff-9dd18e34eda6",
		page: num
	}
	sendAjaxTrue(news_lists, param, "json", addnews);

}

function addnews(data) {
	if(data.result.list.pages <= num) {
		$(".lists_more_btn").addClass("lists_more_btn_active");
		$(".lists_more_btn").html("没有更多数据了");
	}
	var htmls_list_add = [];
	$.each(data.result.list.list, function(i, item) {
		var str = item.brief; //原始字符串
		var str1 = item.title;
		var s = str; //要展示的字符串
		var s1 = str1;
		if(str.length > 65) {
			s = str.substring(0, 65) + "...";
		}
		if(str1.length > 45) {
			s1 = str1.substring(0, 45) + "...";
		}
		htmls_list_add += [
			'<div class="st_pj_container new_lists_num">',
			'<a href="/news/details.html?id=' + item.id + '" target="_blank">',
			'<div class="new_details_img">',
			'<img src="' + item.image + '" />',
			'</div>',
			'<div class="public_primary new_lists_h1">',
			'<h1>' + s1 + '</h1>',
			'<div id="new_lists_content">' + s + '</div>',
			'<div class="new_lists_time">',
			'<time>' + getDateTime2(new Date(item.createTime.time)) + '</time>',
			'<span id="new_source">' + item.source + '</span>',
			'<span class="share">',
			'<a  href="http://service.weibo.com/share/share.php?url=' + yuming + '/news/details.html?id=' + item.id + '&title=' + item.title + '&pic=' + item.image + '" class="weibo" target="_blank" class="weibo" target="_blank">',
			'<i class="iconfont icon-weibo"></i>',
			'</a>',
			'<a href="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=' + yuming + '/news/details.html?id=' + item.id + '&summary=' + item.title + '&title=' + item.title + '&pics=' + item.image + '" target="_blank">',
			'<i class="iconfont icon-kongjian"></i>',
			'</a>',
			'</span>',
			'</div>',
			'</div>',
			'</a>',
			'</div>'
		].join("");
		/*************新闻资讯-微信弹出****************/
		$(".new_lists_img").mouseover(function() {
			$(this).find("p").show();
		})
		$(".new_lists_img").mouseout(function() {
			$(this).find("p").hide();
		})
		$(".icon-weixin").mouseover(function() {
			$(this).parent().find(".panel-weixin").show();
		})
		$(".icon-weixin").mouseout(function() {
			$(".panel-weixin").hide();
		})
	})
	$("#newlist").append(htmls_list_add);
}