//time:217-06-27
//made by: kami
jQuery(document).ready(function(){
	jQuery(".radio").live("click",function(){
		if(jQuery(this).text()==="银行卡"){
			jQuery(".bank").show();
		}
		else{
			jQuery(".bank").hide();
		}
	});
});