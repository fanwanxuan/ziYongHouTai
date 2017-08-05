//time:217-06-27
//made by: kami
jQuery(document).ready(function(){
	jQuery(".shortcut-btns .delete").live("click",function(){//批量删除分类
		if(jQuery(".tbody .check-box .on").length>0){
			var name = "";
			for(var i = 0;i < jQuery(".tbody .check-box").length;i++){
				if(jQuery(".tbody .check-box").eq(i).find("i").hasClass("on")){
					name += "“<em>"+jQuery(".tbody .row").eq(i).find(".flmc").text()+"</em>”";
				};
			}
			var title="系统提示";
			var content="<li>你确定要删除"+name+"吗？</li>";
			var callback="deletesort";
			var fuvalue="";
			sysmessage(title,content,callback,fuvalue);
		}
	});
	//添加版块
	jQuery(".shortcut-btns .add").live("click",function(){
		editcontent("添加分类","","addsort","添  加");
	});
	//编辑版块
	jQuery(".tbody .icon-edit").live("click",function(){
		var flmc = jQuery(this).parents(".row").find(".flmc").text();
		jQuery(this).parents(".row").addClass("editnow");
		editcontent("编辑分类",flmc,"editsort","保  存");
	});
	//判断版块名称
	jQuery(".editbox #flmc").live("focusout",function(){
		var _flmc = jQuery(".editbox #flmc").val().replace(/(^\s*)|(\s*$)/g, "");
		if(_flmc === ""){
			jQuery(".editbox .error-tips").text("");
		}
		else{
			jQuery(".editbox .error-tips").text("");
		}
	});
});
function deletesort(){//删除分类
	if(!jQuery(".system-message").is(":animated")){//没有执行动画的情况下
		messageclose();
		jQuery(".tbody .check-box .on").parents(".row").remove();
		systips("系统提示","删除成功！");
	}
}
function addsort(){//添加分类
	if(!jQuery(".editbox").is(":animated")){//没有执行动画的情况下
		var _flmc = jQuery(".editbox #flmc").val().replace(/(^\s*)|(\s*$)/g, "");
		var _error = jQuery(".editbox .error-tips").text();
		if(_flmc === ""){
			jQuery(".editbox .error-tips").text("请输入分类名称！");
		}
		if(_flmc !== "" && _error === ""){
			var _row = jQuery('<div class="row"><div class="check"><div class="check-box"><i class="icon-check"></i></div></div><div class="flmc">'+_flmc+'</div><div class="cz"><a href="javascript:;" title="编辑" class="icon-edit">编辑</a></div></div>');
			jQuery(".tbody").prepend(_row);
			if(jQuery(".checkall i").hasClass("on")){
				jQuery(".checkall i").removeClass("on");
			}
			editboxclose();
			systips("系统提示","添加成功！");
		}
	}
}
function editsort(){//编辑版块
	if(!jQuery(".editbox").is(":animated")){//没有执行动画的情况下
		var _flmc = jQuery(".editbox #flmc").val().replace(/(^\s*)|(\s*$)/g, "");
		var _error = jQuery(".editbox .error-tips").text();
		if(_flmc === ""){
			jQuery(".editbox .error-tips").text("请输入分类名称！");
		}
		if(_flmc !== "" && _error === ""){
			
			jQuery(".editnow .flmc").text(_flmc);
			editboxclose();
			systips("系统提示","修改成功！");
			jQuery(".editnow").removeClass("editnow");
		}
	}
}
function editcontent(title,flmc,callback,btnText){//编辑框内容
	var content = '<div class="line">';
		content+= '	<div class="line-left">分类名称</div>';
		content+= '	<div class="line-right">';
		content+= '		<div class="input-box"><input type="text" class="input" id="flmc" value="'+flmc+'" placeholder="请输入分类名称" /></div>';
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