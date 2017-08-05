//time:217-07-03
//made by: kami
jQuery(document).ready(function(){
	//体检人信息
	jQuery(".tbody .cz a.icon-view").live("click",function(){
		personinfo();
	});
	//按键功能
	jQuery(document).keydown(function(event) {	
		if(event.which === 13){//enter
			if(!jQuery(".personinfo").is(":hidden") && !jQuery(".personinfo").is(":animated")){//enter关闭体检人信息
				jQuery(".personinfo .personinfo-btns a:first").click();
			}
		}
		if(event.which === 27){//esc
			if(!jQuery(".personinfo").is(":hidden")){//esc关闭体检人信息
				jQuery(".personinfo .close").click();
			}
		}
	});
});
//统计金额
function statistical_amount(){
	jQuery(".statistics-result").fadeIn();
}
//显示体检人信息
function personinfo(){
	popupbgshow();
	var personinfoheight = jQuery(".personinfo").height()/2;//页面高度
	jQuery(".personinfo").css("margin-top",-personinfoheight);
	jQuery(".personinfo").fadeIn();
	jQuery(".personinfo .personinfo-btns a:first").focus();
}
//关闭体检人信息
function personinfoclose(){
	jQuery(".personinfo").fadeOut();
	jQuery(".pop-up-bg").fadeOut(function(){
		jQuery(".pop-up-bg").remove();
	});
}