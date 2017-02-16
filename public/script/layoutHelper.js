/*
*该对象辅助布局
*/
var layoutHelper = (function($){
	//TODO:use jQuery css selector
	var headerH = 64,profileH = 120,navW = 358;
	//set nav-list height
	var setNavListHeight =function(){
		var height = $(window).height() - headerH - profileH;
		$('.nav-list').innerHeight(height);
	}

	//set main width & height
	var setMainDimensions =function(){
		var width = $(window).width() - navW;
		var height = $(window).height() - headerH;

		$('main').innerHeight(height);
		$('main').innerWidth(width);
	}

	var init = function(){
		setNavListHeight();
		setMainDimensions();
	}

	return {
		init:init
	}
})(jQuery);