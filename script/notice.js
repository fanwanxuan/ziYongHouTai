//time:217-06-27
//made by: kami
jQuery(document).ready(function(){
	//详细内容高度随内容变化
	jQuery(".textarea-box .proposal").autoTextarea({
		maxHeight:null//文本框是否自动撑高，默认：null，不自动撑高；如果自动撑高必须输入数值，该值作为文本框自动撑高的最大高度
	});
});