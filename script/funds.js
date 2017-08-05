//time:217-07-14
//made by: kami
jQuery(document).ready(function(){
	jQuery(".filter-btns a").live("click",function(){
		jQuery(".filter-btns a").removeClass("on");
		jQuery(this).addClass("on");
		var _filter = jQuery(this).text();
		if(_filter === "总览"){
			jQuery(".filter .switch").hide();
			jQuery(".filter-data").hide();
			jQuery(".allview").show();
		}
		else{
			jQuery(".filter .switch").show();
			jQuery(".allview").hide();
			jQuery(".filter-data").show();
		}
		if(_filter === "本月"){
			jQuery(".filter .switch .now").text("2017年7月");
			jQuery(".data-chart").hide();
			jQuery(".data-month").show();
		}
		if(_filter === "本季"){
			jQuery(".filter .switch .now").text("2017年2季度");
			jQuery(".data-chart").hide();
			jQuery(".data-quarterly").show();
		}
		if(_filter === "本年"){
			jQuery(".filter .switch .now").text("2017年");
			jQuery(".data-chart").hide();
			jQuery(".data-year").show();
		}
	});
	jQuery(".charts-name .change a").live("click",function(){
		jQuery(this).parent().find("a").removeClass("on");
		jQuery(this).addClass("on");
	});
});