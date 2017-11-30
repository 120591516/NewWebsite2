/*标准服务鼠标滑过效果*/
window.onload = function() {
	/*$(".col-lgg-4").mouseover(function() {
		$(".col-lgg-4").removeClass("public-horn-45");
		$(".col-lgg-4").removeClass("index_bz_bg");
		$(this).addClass("public-horn-45");
		$(this).addClass("index_bz_bg");
	})
	$(".col-lgg-4").mouseout(function() {
		$(".col-lgg-4").removeClass("public-horn-45");
		$(".col-lgg-4").removeClass("index_bz_bg");
	})*/
	/*标准服务点击切换图片效果*/
	$(".col-2").click(function() {
		$(".col-2").removeClass("col-2-active");
		$(this).addClass("col-2-active");
		$(".col-2").find("div").removeClass("col-2-bg-active");
		$(this).find("div").addClass("col-2-bg-active");
	})
	/*定制服务效果*/
	$(".container_box2_lists .col-2").mouseover(function() {
		$(".container_box2_lists .col-2").prev(".dingzhi_line").css("height", "152px");
		$(".container_box2_lists .col-2").next(".dingzhi_line").css("height", "152px");
		$(this).prev(".dingzhi_line").css("height", "212px");
		$(this).next(".dingzhi_line").css("height", "212px");
		$(this).prev(".dingzhi_line").stop().animate({ top: "-10px" }, 500);
		$(this).next(".dingzhi_line").stop().animate({
			top: "-10px"
		}, 500);
		$(this).find("img").stop().animate({ top: "-30px" }, 500);
		$(this).find("h6").stop().animate({ top: "35px" }, 500);
		$(this).find(".item-line").stop().animate({ top: "65px" }, 100).css("opacity", "0");
		$(this).find(".chakan_btn").stop().animate({ top: "160px" }, 500);
		$(this).find(".dzfuwu_p").show();
		$(this).find(".dzfuwu_p").stop().animate({ top: "45px" }, 500);

	})

	$(".container_box2_lists .col-2").mouseout(function() {

		$(this).prev(".dingzhi_line").css("height", "152px");
		$(this).next(".dingzhi_line").css("height", "152px");
		$(this).prev(".dingzhi_line").stop().animate({
			top: "0px"
		}, 500);
		$(this).next(".dingzhi_line").stop().animate({
			top: "0px"
		}, 500);

		$(this).find("img").stop().animate({ top: "0px" }, 500);
		$(this).find("h6").stop().animate({ top: "65px" }, 500);
		$(this).find(".item-line").stop().animate({ top: "95px" }, 100).css("opacity", "1");
		$(this).find(".chakan_btn").stop().animate({ top: "105px" }, 500);
		$(this).find(".dzfuwu_p").hide();
		$(this).find(".dzfuwu_p").stop().animate({ top: "50px" }, 500);

	})

	$(".standard_xq_tab").click(function() {
		$(".standard_xq_tab").removeClass("standard_tab_active");
		$(this).addClass("standard_tab_active");
	})
	/*****************切换支付方式****************************/
	$(".order_zhifu_li1").click(function() {
		$(".order_zhifu ul li").removeClass("order_active");
		$(this).addClass("order_active");
		$(".order_weixin,.order_yinlian").addClass("hide");
		$(".order_zhifubao").removeClass("hide");
	})
	$(".order_zhifu_li2").click(function() {
		$(".order_zhifu ul li").removeClass("order_active");
		$(this).addClass("order_active");
		$(".order_zhifubao,.order_yinlian").addClass("hide");
		$(".order_weixin").removeClass("hide");
	})
	$(".order_zhifu_li3").click(function() {
		$(".order_zhifu ul li").removeClass("order_active");
		$(this).addClass("order_active");
		$(".order_zhifubao,.order_weixin").addClass("hide");
		$(".order_yinlian").removeClass("hide");
	})
	/***********服务-详情选中样式*****************/
	$(".st_goods_xz1 button").click(function() {
		$(".st_goods_xz1 button").removeAttr("id", "st_goods_active");
		$(this).attr("id", "st_goods_active");
	})
	$(".st_goods_xz2 button").click(function() {
		$(".st_goods_xz2 button").removeAttr("id", "st_goods_active");
		$(this).attr("id", "st_goods_active");
	})
	$(".st_goods_xz1 button").eq(0).attr("id", "st_goods_active");
	$(".st_goods_xz2 button").eq(0).attr("id", "st_goods_active");
}
/*标准服务箭头移动效果*/
/*function fuwu_tab1() {
	$(".container_lists_xq img").animate({
		left: "20%"
	}, 500);
}

function fuwu_tab2() {
	$(".container_lists_xq img").animate({
		left: "40%"
	}, 500);
}

function fuwu_tab3() {
	$(".container_lists_xq img").animate({
		left: "60%"
	}, 500);
}

function fuwu_tab4() {
	$(".container_lists_xq img").animate({
		left: "80%"
	}, 500);
}

function fuwu_tab5() {
	$(".container_lists_xq img").animate({
		left: "100%"
	}, 500);
}*/
/******************导航和轮播图***************************/
$(function() {
	/*导航效果*/
	$("nav ul li").hover(function() {
		$(".line").show();
		$(this).find("#a").stop(true, true).slideDown(300);
	}, function() {
		$(".line").hide();
		$(this).find("#a").hide();
	})
	$(".index1").hover(function() {
		$(".line").stop().animate({
			left: "560px"
		}, 300)

	})
	$(".index2").hover(function() {
		$(".line").stop().animate({
			left: "653px"
		}, 300);
	})
	$(".index3").hover(function() {
		$(".line").stop().animate({
			left: "773px"
		}, 300);
	})
	$(".index4").hover(function() {
		$(".line").stop().animate({
			left: "883px"
		}, 300);
	})
	$(".index5").hover(function() {
		$(".line").stop().animate({
			left: "1000px"
		}, 300)
	})
	$(".index6").mouseover(function() {
		$(".line").stop().animate({
			left: "1120px"
		}, 300)
	})
	//	$(".index7").mouseover(function() {
	//		$(".line").stop().animate({
	//			left: "875px"
	//		}, 300)
	//	})
	//	$(".index8").mouseover(function() {
	//		$(".line").stop().animate({
	//			left: "987px"
	//		}, 300)
	//	})
	$("#a").hover(function() {
		$(this).show();
	}, function() {
		$(this).slideUp(200);
	})
})
/********订单支付-弹出微信扫码*************/
function tanchuan_zhifu() {
	$(".order_weixin_bg").removeClass("hide");
}

function close_order() {
	$(".order_weixin_bg").addClass("hide");
}