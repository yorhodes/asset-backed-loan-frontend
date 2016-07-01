function expand_borrow() {
	change_market_source("/images/borrow_market.png");
}

function expand_sell() {
	change_market_source("/images/sell_market.png");
}

function expand_force_sell() {
	change_market_source("/images/force_sell_market.png");
}

function change_market_source(img_src) {
	$("#market_diagram").attr("src",img_src);
	window.scrollTo(0, $("#market_diagram").offset().top);
}