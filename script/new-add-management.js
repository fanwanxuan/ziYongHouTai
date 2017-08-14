//time:217-06-27
//made by: kami
jQuery(document).ready(function(){
	jQuery(".shortcut-btns .delete").live("click",function(){//批量删除人员
		if(jQuery(".tbody .check-box .on").length>0){
			var name = "";
			for(var i = 0;i < jQuery(".tbody .check-box").length;i++){
				if(jQuery(".tbody .check-box").eq(i).find("i").hasClass("on")){
					name += "“<em>"+jQuery(".tbody .row").eq(i).find(".jsmc").text()+"</em>”";
				};
			}
			var title="系统提示";
			var content="<li>你确定要删除"+name+"吗？</li>";
			var callback="deleterole";
			var fuvalue="";
			sysmessage(title,content,callback,fuvalue);
		}
	});
	//添加角色
	jQuery(".shortcut-btns .add").live("click",function(){
		editcontent("添加角色","","addrole","添  加");
	});
	//编辑角色
	jQuery(".tbody .icon-edit").live("click",function(){
		var ssfl = jQuery(this).parents(".row").find(".ssfl").text();
		var jsmc = jQuery(this).parents(".row").find(".jsmc").text();
		jQuery(this).parents(".row").addClass("editnow");
		editcontent("编辑角色",jsmc,"editrole","保  存");
	});
	//判断角色名称
	jQuery(".editbox #jsmc").live("focusout",function(){
		var _jsmc = jQuery(".editbox #jsmc").val().replace(/(^\s*)|(\s*$)/g, "");
		if(_jsmc === ""){
			jQuery(".editbox .error-tips").text("");
		}
		else{
			jQuery(".editbox .error-tips").text("");
		}
	});
	//编辑角色权限
	jQuery(".tbody .icon-authority").live("click",function(){
		popupbgshow();
		var authoritywidth = jQuery(".authority").width()/2;//页面宽度
		var authorityheight = jQuery(".authority").height()/2;//页面高度
		jQuery(".authority").css("margin-left",-authoritywidth);
		jQuery(".authority").css("margin-top",-authorityheight);
		jQuery(".authority").fadeIn();
	});
	jQuery(".authority .authority-content .authority-left li").live("click",function(){
		var _num = jQuery(this).index();
		jQuery(".authority .authority-content .authority-left li").removeClass("on");
		jQuery(this).addClass("on");
		jQuery(".authority .authority-content .authority-right ul").removeClass("show");
		jQuery(".authority .authority-content .authority-right ul").eq(_num).addClass("show");
	});
	//全选管理复选框单个选择
	jQuery(".authority-right .icon-check").live("click",function(){
		jQuery(this).toggleClass("on");
	});
});
//关闭权限管理
function authorityclose(){
	jQuery(".authority").fadeOut();
	jQuery(".pop-up-bg").fadeOut(function(){
		jQuery(".pop-up-bg").remove();
	});
}
//保存权限管理
function authoritysave(){
	authorityclose();
}
function deleterole(){//删除角色
	if(!jQuery(".system-message").is(":animated")){//没有执行动画的情况下
		messageclose();
		jQuery(".tbody .check-box .on").parents(".row").remove();
		systips("系统提示","删除成功！");
	}
}
function addrole(){//添加角色
	debugger
	if(!jQuery(".editbox").is(":animated")){//没有执行动画的情况下
		var _jsmc = jQuery(".editbox #jsmc").val().replace(/(^\s*)|(\s*$)/g, "");
		var _error = jQuery(".editbox .error-tips").text();
		if(_jsmc === ""){
			jQuery(".editbox .error-tips").text("请输入板块名称！");
		}
		if(_jsmc !== "" && _error === ""){
			var _row = jQuery('<div class="row"><div class="check"><div class="check-box"><i class="icon-check"></i></div></div><div class="jsmc">'+_jsmc+'</div><div class="cz"><a href="javascript:;" title="编辑" class="icon-edit">编辑</a></div></div>');
			jQuery(".tbody").prepend(_row);
			if(jQuery(".checkall i").hasClass("on")){
				jQuery(".checkall i").removeClass("on");
			}
			editboxclose();
			systips("系统提示","添加成功！");
		}
	}
}
function editrole(){//编辑角色
	if(!jQuery(".editbox").is(":animated")){//没有执行动画的情况下
		var _jsmc = jQuery(".editbox #jsmc").val().replace(/(^\s*)|(\s*$)/g, "");
		var _error = jQuery(".editbox .error-tips").text();
		if(_jsmc === ""){
			jQuery(".editbox .error-tips").text("请输入板块名称！");
		}
		if(_jsmc !== "" && _error === ""){
			
			jQuery(".editnow .jsmc").text(_jsmc);
			editboxclose();
			systips("系统提示","修改成功！");
			jQuery(".editnow").removeClass("editnow");
		}
	}
}
function editcontent(title,jsmc,callback,btnText){//编辑框内容
/*	var content = '<div class="line">';
		content+= '	<div class="line-left">角色名称</div>';
		content+= '	<div class="line-right">';
		content+= '		<div class="input-box"><input type="text" class="input" id="jsmc" value="'+jsmc+'" placeholder="请输入角色名称" /></div>';
		content+= '	</div>';
		content+= '</div>';
		content+= '<div class="error-tips"></div>';*/
		var content = '<div class="line">';
		content+= '	<div style="margin:10px 0;">';
		content+= '	<div class="line-left">所属分类</div>';
		content+= '	<div class="line-right">';
		content+= '		<div class="input-box">';
		content+= '		<select style="width:222px;padding:10px 0;border: 1px solid #d8dee3;"><option>健康资讯</option><option>养生</option></select>';
		content+= '</div>';
		content+= '</div>';
		content+= '	</div>';
			content+= '	<div class="line-left">板块名称</div>';
		content+= '	<div class="line-right">';
		content+= '		<div class="input-box"><input type="text" class="input" id="jsmc" value="'+jsmc+'" placeholder="请输入角色名称" /></div>';
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