//var ip = "http://192.168.7.102:8080";
var producturl = ip + "/product/getGoodsList.json";
var siteId = "3790272c-0ad4-445d-9fe6-d1710f1b7e06";
var platformId = "137af233f4864b8d8f66ee02274238a8";

function fuwu_tab1(platformId, productId) {
	param = {
		platformId: platformId,
		productId: productId,
		deviceType: 1,
		siteId:siteId,
	}
	sendAjaxTrue(producturl, param, "json", function(data) {
		document.getElementById("result").innerHTML = "";
		var dataObj = data.result;
		var con = "";
		$.each(dataObj, function(index, item) {
			document.getElementById("result").innerHTML += "<div class='col-lgg-4' >" +
				"<a href='/service/standard/details.html?siteId=" + siteId + "&goodsId=" + item.id + "&deviceType=1' target='_blank'>" +
				"<h6>" + item.title + "</h6>" +
				"<p>" + item.sub_title + "</p>" +
				"</a></div>"
		});
		$(".col-lgg-4").mouseover(function() {
			$(".col-lgg-4").removeClass("public-horn-45");
			$(".col-lgg-4").removeClass("index_bz_bg");
			$(this).addClass("public-horn-45");
			$(this).addClass("index_bz_bg");
		})
		$(".col-lgg-4").mouseout(function() {
			$(".col-lgg-4").removeClass("public-horn-45");
			$(".col-lgg-4").removeClass("index_bz_bg");
		})
	});
	$(".container_lists_xq img").animate({
		left: "60%"
	}, 500);
	
}

function fuwu_tab2(platformId, productId) {
	param = {
		platformId: platformId,
		productId: productId,
		deviceType: 1,
		siteId:siteId,
	}
	sendAjaxTrue(producturl, param, "json", function(data) {
		document.getElementById("result").innerHTML = "";
		var dataObj = data.result;
		var con = "";
		$.each(dataObj, function(index, item) {

			document.getElementById("result").innerHTML += "<div class='col-lgg-4' >" +
				"<a href='/service/standard/details.html?siteId=" + siteId + "&goodsId=" + item.id + "&deviceType=1'  target='_blank'>" +
				"<h6>" + item.title + "</h6>" +
				"<p>" + item.sub_title + "</p>" +
				"</a></div>"
		});
		$(".col-lgg-4").mouseover(function() {
			$(".col-lgg-4").removeClass("public-horn-45");
			$(".col-lgg-4").removeClass("index_bz_bg");
			$(this).addClass("public-horn-45");
			$(this).addClass("index_bz_bg");
		})
		$(".col-lgg-4").mouseout(function() {
			$(".col-lgg-4").removeClass("public-horn-45");
			$(".col-lgg-4").removeClass("index_bz_bg");
		})
/*		$(".st_goods_xz1 button").click(function() {
			$(".st_goods_xz1 button").removeAttr("id", "st_goods_active");
			$(this).attr("id", "st_goods_active");
		})
		$(".st_goods_xz2 button").click(function() {
			$(".st_goods_xz2 button").removeAttr("id", "st_goods_active");
			$(this).attr("id", "st_goods_active");
		})
		$(".st_goods_xz1 button").eq(0).attr("id", "st_goods_active");
		$(".st_goods_xz2 button").eq(0).attr("id", "st_goods_active");*/
	});
	$(".container_lists_xq img").animate({
		left: "40%"
	}, 500);

}

function fuwu_tab3(platformId, productId) {

	param = {
		platformId: platformId,
		productId: productId,
		deviceType: 1,
		siteId:siteId,
	}
	sendAjaxTrue(producturl, param, "json", function(data) {
		document.getElementById("result").innerHTML = "";
		var dataObj = data.result;
		var con = "";
		$.each(dataObj, function(index, item) {
			document.getElementById("result").innerHTML += "<div class='col-lgg-4' >" +
				"<a href='/service/standard/details.html?siteId=" + siteId + "&goodsId=" + item.id + "&deviceType=1'  target='_blank'>" +
				"<h6>" + item.title + "</h6>" +
				"<p>" + item.sub_title + "</p>" +
				"</a></div>"
		});
		$(".col-lgg-4").mouseover(function() {
			$(".col-lgg-4").removeClass("public-horn-45");
			$(".col-lgg-4").removeClass("index_bz_bg");
			$(this).addClass("public-horn-45");
			$(this).addClass("index_bz_bg");
		})
		$(".col-lgg-4").mouseout(function() {
			$(".col-lgg-4").removeClass("public-horn-45");
			$(".col-lgg-4").removeClass("index_bz_bg");
		})
	/*	$(".st_goods_xz1 button").click(function() {
			$(".st_goods_xz1 button").removeAttr("id", "st_goods_active");
			$(this).attr("id", "st_goods_active");
		})
		$(".st_goods_xz2 button").click(function() {
			$(".st_goods_xz2 button").removeAttr("id", "st_goods_active");
			$(this).attr("id", "st_goods_active");
		})
		$(".st_goods_xz1 button").eq(0).attr("id", "st_goods_active");
		$(".st_goods_xz2 button").eq(0).attr("id", "st_goods_active");*/
	});
$(".container_lists_xq img").animate({
		left: "20%"
	}, 500);
	
}

function fuwu_tab4(platformId, productId) {

	param = {
		platformId: platformId,
		productId: productId,
		deviceType: 1,
		siteId:siteId,
	}
	sendAjaxTrue(producturl, param, "json", function(data) {
		document.getElementById("result").innerHTML = "";
		var dataObj = data.result;
		var con = "";
		$.each(dataObj, function(index, item) {
			document.getElementById("result").innerHTML += "<div class='col-lgg-4' >" +
				"<a href='/service/standard/details.html?siteId=" + siteId + "&goodsId=" + item.id + "&deviceType=1'  target='_blank'>" +
				"<h6>" + item.title + "</h6>" +
				"<p>" + item.sub_title + "</p>" +
				"</a></div>"
		});
		$(".col-lgg-4").mouseover(function() {
			$(".col-lgg-4").removeClass("public-horn-45");
			$(".col-lgg-4").removeClass("index_bz_bg");
			$(this).addClass("public-horn-45");
			$(this).addClass("index_bz_bg");
		})
		$(".col-lgg-4").mouseout(function() {
			$(".col-lgg-4").removeClass("public-horn-45");
			$(".col-lgg-4").removeClass("index_bz_bg");
		})
	/*	$(".st_goods_xz1 button").click(function() {
			$(".st_goods_xz1 button").removeAttr("id", "st_goods_active");
			$(this).attr("id", "st_goods_active");
		})
		$(".st_goods_xz2 button").click(function() {
			$(".st_goods_xz2 button").removeAttr("id", "st_goods_active");
			$(this).attr("id", "st_goods_active");
		})
		$(".st_goods_xz1 button").eq(0).attr("id", "st_goods_active");
		$(".st_goods_xz2 button").eq(0).attr("id", "st_goods_active");*/
	});

	$(".container_lists_xq img").animate({
		left: "80%"
	}, 500);
}

function fuwu_tab5(platformId, productId) {

	param = {
		platformId: platformId,
		productId: productId,
		deviceType: 1,
		siteId:siteId,

	}
	sendAjaxTrue(producturl, param, "json", function(data) {
		document.getElementById("result").innerHTML = "";
		var dataObj = data.result;
		var con = "";
		$.each(dataObj, function(index, item) {
			document.getElementById("result").innerHTML += "<div class='col-lgg-4' >" +
				"<a href='/service/standard/details.html?siteId=" + siteId + "&goodsId=" + item.id + "&deviceType=1'  target='_blank'>" +
				"<h6>" + item.title + "</h6>" +
				"<p>" + item.sub_title + "</p>" +
				"</a></div>"
		});
		$(".col-lgg-4").mouseover(function() {
			$(".col-lgg-4").removeClass("public-horn-45");
			$(".col-lgg-4").removeClass("index_bz_bg");
			$(this).addClass("public-horn-45");
			$(this).addClass("index_bz_bg");
		})
		$(".col-lgg-4").mouseout(function() {
			$(".col-lgg-4").removeClass("public-horn-45");
			$(".col-lgg-4").removeClass("index_bz_bg");
		})
		/*$(".st_goods_xz1 button").click(function() {
			$(".st_goods_xz1 button").removeAttr("id", "st_goods_active");
			$(this).attr("id", "st_goods_active");
		})
		$(".st_goods_xz2 button").click(function() {
			$(".st_goods_xz2 button").removeAttr("id", "st_goods_active");
			$(this).attr("id", "st_goods_active");
		})
		$(".st_goods_xz1 button").eq(0).attr("id", "st_goods_active");
		$(".st_goods_xz2 button").eq(0).attr("id", "st_goods_active");*/
	});

	$(".container_lists_xq img").animate({
		left: "100%"
	}, 500);

}

function test() {
	alert(1111111111111111);
}

$(document).ready(function() {
	$(".container_lists_xq img").animate({
		left: "20%"
	}, 500);

	var allServiceUrl = ip + "/product/getNavigation.json";
	param = {
		platformId: platformId,
		deviceType: "1",
	}

	sendAjaxTrue(allServiceUrl, param, "json", function(data) {
		var dataObj = data.result;
		var con = "";
		for(var i = 0; i < dataObj.length; i++) {
			con += "<dl><dt>" + dataObj[i].title + "</dt>";
			var goodsList = dataObj[i].goodsList;
			for(var j = 0; j < goodsList.length; j++) {
				con += "<dd><a href='/service/standard/details.html?siteId=" + siteId + "&goodsId=" + goodsList[j].id + "&deviceType=1'  >" + goodsList[j].title + "</a></dd>";
			}
			con += "</dl>";
		}
		document.getElementById("serviceId").innerHTML = con;
		/***********服务-详情选中样式*****************/
		
		/*$(".st_goods_xz1 button").click(function() {
			$(".st_goods_xz1 button").removeAttr("id", "st_goods_active");
			$(this).attr("id", "st_goods_active");
		})
		$(".st_goods_xz2 button").click(function() {
			$(".st_goods_xz2 button").removeAttr("id", "st_goods_active");
			$(this).attr("id", "st_goods_active");
		})
		$(".st_goods_xz1 button").eq(0).attr("id", "st_goods_active");
		$(".st_goods_xz2 button").eq(0).attr("id", "st_goods_active");*/
	});
})