//made time:2015-05-20
//made by:gami


(function(jQuery){
jQuery.fn.autoTextarea = function(options) {
	var defaults={
		maxHeight:null,//文本框是否自动撑高，默认：null，不自动撑高；如果自动撑高必须输入数值，该值作为文本框自动撑高的最大高度
		minHeight:jQuery(this).height() //默认最小高度，也就是文本框最初的高度，当内容高度小于这个高度的时候，文本以这个高度显示
	};
	var opts = jQuery.extend({},defaults,options);
	return jQuery(this).each(function() {
		jQuery(this).bind("paste cut keydown keyup focus blur",function(){
			var height,style=this.style;
			this.style.height =  opts.minHeight + 'px';
			if (this.scrollHeight > opts.minHeight) {
				if (opts.maxHeight && this.scrollHeight > opts.maxHeight) {
					height = opts.maxHeight;
					style.overflowY = 'scroll';
				}
				else {
					height = this.scrollHeight-20;
					style.overflowY = 'hidden';
				}
				style.height = height  + 'px';
				}
			});
		});
	};
})(jQuery);