//time:217-07-06
//made by: kami
jQuery(document).ready(function(){
	//减少，不能小于1
	jQuery(".tbody .less").live("click",function(){
		var _num = jQuery(this).next().val();
		if(_num>1){
			jQuery(this).next().val(_num-1);
		}
	});
	//增加，不能大于99
	jQuery(".tbody .add").live("click",function(){
		var _num = parseInt(jQuery(this).prev().val());
		if(_num<99){
			jQuery(this).prev().val(_num+1);
		}
	});
	//直接输入判断是否为数字、是否小于1或者大于99
	jQuery(".tbody .sorting input").live("input propertychange",function(){
		var pattern = /^([0-9]+)$/;
		var _input = jQuery(this).val();
		if(_input === ""){
			jQuery(this).val(1);
		}
		else{
			if(!pattern.test(_input)){
				jQuery(this).val(1);
			}
			else{
				if(_input<1 || _input>99){
					jQuery(this).val(1);
				}
			}
		}
	});
});