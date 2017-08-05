//time:217-06-27
//made by: kami
jQuery(document).ready(function(){
	jQuery(".tbody .cz .icon-delete").live("click",function(){
		var name = jQuery(this).parents(".row").find(".jgmc").text();
		var title="系统提示";
		var content="<li>你确定要删除“<em>"+name+"</em>”吗？</li>";
		var callback="deleteinstitutional";
		var fuvalue= jQuery(this).parents(".row").index();
		sysmessage(title,content,callback,fuvalue);
	});
});
function deleteinstitutional(fuvalue){
	if(!jQuery(".system-message").is(":animated")){//没有执行动画的情况下
		messageclose();
		jQuery(".tbody .row").eq(fuvalue).remove();
		systips("系统提示","删除成功！");
	}
}