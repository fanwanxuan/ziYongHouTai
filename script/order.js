//time:217-07-14
//made by: kami
jQuery(document).ready(function(){
	jQuery(".filter-btns a").live("click",function(){
		jQuery(".filter-btns a").removeClass("on");
		jQuery(this).addClass("on");
		var _filter = jQuery(this).text();
		if(_filter === "总览"){
			jQuery(".filter .switch").hide();
			jQuery(".data-charts").hide();
			jQuery(".order-rank").show();
		}
		else{
			jQuery(".filter .switch").show();
			jQuery(".order-rank").hide();
			jQuery(".data-charts").show();
		}
		if(_filter === "本月"){
			jQuery(".filter .switch .now").text("2017年7月");
			jQuery(".order-rank").hide();
			jQuery(".data-charts").show();
			jQuery(".charts-name .change a:even").text("按周显示");
			jQuery(".charts-name .change a:odd").text("按日显示");
		}
		if(_filter === "本季"){
			jQuery(".filter .switch .now").text("2017年2季度");
			jQuery(".order-rank").hide();
			jQuery(".data-charts").show();
			jQuery(".charts-name .change a:even").text("按月显示");
			jQuery(".charts-name .change a:odd").text("按周显示");
		}
		if(_filter === "本年"){
			jQuery(".filter .switch .now").text("2017年");
			jQuery(".order-rank").hide();
			jQuery(".data-charts").show();
			jQuery(".charts-name .change a:even").text("按季显示");
			jQuery(".charts-name .change a:odd").text("按月显示");
		}
	});
	jQuery(".charts-name .change a").live("click",function(){
		jQuery(this).parent().find("a").removeClass("on");
		jQuery(this).addClass("on");
	});
});