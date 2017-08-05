//time:217-06-27
//made by: kami
jQuery(document).ready(function(){
	/*jQuery(".shortcut-btns .delete").live("click",function(){//批量删除人员
		if(jQuery(".tbody .check-box .on").length>0){
			var name = "";
			for(var i = 0;i < jQuery(".tbody .check-box").length;i++){
				if(jQuery(".tbody .check-box").eq(i).find("i").hasClass("on")){
					name += "“<em>"+jQuery(".tbody .row").eq(i).find(".bkmc").text()+"</em>”";
				};
			}
			var title="系统提示";
			var content="<li>你确定要删除"+name+"吗？</li>";
			var callback="deleteclassify";
			var fuvalue="";
			sysmessage(title,content,callback,fuvalue);
		}
	});*/

	//添加版块
	jQuery(".shortcut-btns .add").live("click",function(){
		editcontent("添加版块","","","addclassify","添  加");
	});
	//编辑版块
	jQuery(".tbody .icon-edit").live("click",function(){
		var ssfl = jQuery(this).parents(".row").find(".ssfl").text();
		var bkmc = jQuery(this).parents(".row").find(".bkmc").text();
		jQuery(this).parents(".row").addClass("editnow");
		editcontent("编辑版块",ssfl,bkmc,"editclassify","保  存");
	});
	//判断版块名称
	jQuery(".editbox #bkmc").live("focusout",function(){
		var _bkmc = jQuery(".editbox #bkmc").val().replace(/(^\s*)|(\s*$)/g, "");
		if(_bkmc === ""){
			jQuery(".editbox .error-tips").text("");
		}
		else{
			jQuery(".editbox .error-tips").text("");
		}
	});
});
	/*function operationD (name){
		 jQuery(".shortcut-btns " +name).live("click",function(){//批量删除人员
			if(jQuery(".tbody .check-box .on").length>0){
				var name = "";
				for(var i = 0;i < jQuery(".tbody .check-box").length;i++){
					if(jQuery(".tbody .check-box").eq(i).find("i").hasClass("on")){
						name += "“<em>"+jQuery(".tbody .row").eq(i).find(".bkmc").text()+"</em>”";
					};
				}
				var title="系统提示";
				var content="<li>你确定要删除"+name+"吗？</li>";
				var callback="deleteclassify";
				var fuvalue="";
				sysmessage(title,content,callback,fuvalue);
			}
		}); 
	}*/
function deleteclassify(){//删除版块
	if(!jQuery(".system-message").is(":animated")){//没有执行动画的情况下
		messageclose();
		jQuery(".tbody .check-box .on").parents(".row").remove();
		systips("系统提示","删除成功！");
	}
}
function addclassify(){//添加版块
	if(!jQuery(".editbox").is(":animated")){//没有执行动画的情况下
		var _ssfl = jQuery(".editbox .edit-content .selected").text();
		var _bkmc = jQuery(".editbox #bkmc").val().replace(/(^\s*)|(\s*$)/g, "");
		var _error = jQuery(".editbox .error-tips").text();
		if(_bkmc === ""){
			jQuery(".editbox .error-tips").text("请输入版块名称！");
		}
		if(_bkmc !== "" && _error === ""){
			var _row = jQuery('<div class="row"><div class="check"><div class="check-box"><i class="icon-check"></i></div></div><div class="bkmc">'+_bkmc+'</div><div class="ssfl">'+_ssfl+'</div><div class="cz"><a href="javascript:;" title="编辑" class="icon-edit">编辑</a></div></div>');
			jQuery(".tbody").prepend(_row);
			if(jQuery(".checkall i").hasClass("on")){
				jQuery(".checkall i").removeClass("on");
			}
			editboxclose();
			systips("系统提示","添加成功！");
		}
	}
}
function editclassify(){//编辑版块
	if(!jQuery(".editbox").is(":animated")){//没有执行动画的情况下
		var _ssfl = jQuery(".editbox .edit-content .selected").text();
		var _bkmc = jQuery(".editbox #bkmc").val().replace(/(^\s*)|(\s*$)/g, "");
		var _error = jQuery(".editbox .error-tips").text();
		if(_bkmc === ""){
			jQuery(".editbox .error-tips").text("请输入版块名称！");
		}
		if(_bkmc !== "" && _error === ""){
			
			jQuery(".editnow .bkmc").text(_bkmc);
			jQuery(".editnow .ssfl").text(_ssfl);
			editboxclose();
			systips("系统提示","修改成功！");
			jQuery(".editnow").removeClass("editnow");
		}
	}
}
function editcontent(title,ssfl,bkmc,callback,btnText){//编辑框内容
	var content = '<div class="line">';
		content+= '<div class="line-left">所属分类</div>';
		content+= '	<div class="line-right">';
		content+= '		<div class="drop-down"><div class="select"><div class="selected">'+ssfl+'</div><div class="select-list">';
		content+= '<li>健康资讯</li><li>养生秘笈</li><li>健康生活</li></div><div class="icon-dropdown"></div></div></div>';
		content+= '	</div>';
		content+= '</div>';
		content+= '<div class="line">';
		content+= '	<div class="line-left">版块名称</div>';
		content+= '	<div class="line-right">';
		content+= '		<div class="input-box"><input type="text" class="input" id="bkmc" value="'+bkmc+'" placeholder="请输入版块名称" /></div>';
		content+= '	</div>';
		content+= '</div>';
		content+= '<div class="error-tips"></div>';
	var fuvalue ="";
	editbox(title,content,callback,btnText,fuvalue);
	if(ssfl === ""){
		jQuery(".editbox .selected").text(jQuery(".editbox .select-list li:first").text());
	}
}
//显示编辑框位置
function edit(){
	popupbgshow();
	var editboxwidth = jQuery(".editbox").width()/2;//页面宽度
	var editboxheight = jQuery(".editbox").height()/2;//页面高度
	jQuery(".editbox").css("margin-left",-editboxwidth);
	jQuery(".editbox").css("margin-top",-editboxheight);
	jQuery(".editbox").fadeIn();
}
//关闭编辑框
function editboxclose(){
	jQuery(".editbox").fadeOut(function(){
		jQuery(".editbox").remove();
	});
	jQuery(".pop-up-bg").fadeOut(function(){
		jQuery(".pop-up-bg").remove();
	});
}
function editbox(title,content,callback,btnText,fuvalue){//编辑框
	if(jQuery(".editbox").length<1){
		var _editbox = jQuery('<section class="editbox"><div class="edit-title"><i class="close" onclick="javascript:editboxclose();">关闭</i><span>'+title+'</span></div><div class="edit-content">'+content+'</div><div class="edit-btns"><a href="javascript:;" class="yes" onclick="'+callback+'('+fuvalue+')">'+btnText+'</a></div></section>');
		_editbox.appendTo("body");
		edit();
		jQuery(".editbox input:first").focus();
		jQuery(".editbox input:first").blur();
	}
}