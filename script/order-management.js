//time:217-07-03
//made by: kami
jQuery(document).ready(function(){
	//体检人信息
	jQuery(".tbody .tjrs a").live("click",function(){
		account();
	});
	//按键功能
	jQuery(document).keydown(function(event) {	
		if(event.which === 13){//enter
			if(!jQuery(".accountbox").is(":hidden") && !jQuery(".accountbox").is(":animated")){//enter关闭体检人信息
				jQuery(".accountbox .account-btns a:first").click();
			}
		}
		if(event.which === 27){//esc
			if(!jQuery(".accountbox").is(":hidden")){//esc关闭体检人信息
				jQuery(".accountbox .close").click();
			}
		}
	});
});
//显示关联账户位置
function account(){
	popupbgshow();
	var accountboxheight = jQuery(".accountbox").height()/2;//页面高度
	jQuery(".accountbox").css("margin-top",-accountboxheight);
	jQuery(".accountbox").fadeIn();
	jQuery(".accountbox .account-btns a:first").focus();
}
//关闭编辑框
function accountboxclose(){
	jQuery(".accountbox").fadeOut();
	jQuery(".pop-up-bg").fadeOut(function(){
		jQuery(".pop-up-bg").remove();
	});
}