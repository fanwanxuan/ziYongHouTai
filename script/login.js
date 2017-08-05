//time:217-06-26
//made by: kami
jQuery(document).ready(function(){
	jQuery(".btns a").live("click",function(){
		//登录
	});
	//回车登录
	jQuery(document).keydown(function(event) {	
		if(event.which == 13){
			jQuery(".input").focusout();
			jQuery(".btns a").focus();
			jQuery(".btns a").click();
		}
	});
	jQuery(".input-box input").live("focus",function(){
		jQuery(this).parent().addClass("focus");
	});
	jQuery(".input-box input").live("focusout",function(){
		jQuery(this).parent().removeClass("focus");
	});
});