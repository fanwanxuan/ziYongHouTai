//time:217-06-27
//made by: kami
jQuery(document).ready(function(){
	jQuery(".shortcut-btns .delete").live("click",function(){//批量删除人员
		if(jQuery(".tbody .check-box .on").length>0){
			var name = "";
			for(var i = 0;i < jQuery(".tbody .check-box").length;i++){
				if(jQuery(".tbody .check-box").eq(i).find("i").hasClass("on")){
					name += "“<em>"+jQuery(".tbody .row").eq(i).find(".xm").text()+"</em>”";
				};
			}
			var title="系统提示";
			var content="<li>你确定要删除"+name+"吗？</li>";
			var callback="deletemanager";
			var fuvalue="";
			sysmessage(title,content,callback,fuvalue);
		}
	});
	//添加管理员
	jQuery(".shortcut-btns .add").live("click",function(){
		editcontent("添加管理员","","","","","","addmanager","添  加");
	});
	//编辑管理员信息
	jQuery(".tbody .icon-edit").live("click",function(){
		var xm = jQuery(this).parents(".row").find(".xm").text();
		var xb = jQuery(this).parents(".row").find(".xb").text();
		var bm = jQuery(this).parents(".row").find(".bm").text();
		var js = jQuery(this).parents(".row").find(".js").text();
		var sj = jQuery(this).parents(".row").find(".sj").text();
		jQuery(this).parents(".row").addClass("editnow");
		editcontent("编辑管理员信息",xm,xb,bm,js,sj,"editmanager","保  存");
	});
	//判断管理员手机号
	jQuery(".editbox #xm,.editbox #bm,.editbox #sj").live("focusout",function(){
		var _xm = jQuery(".editbox #xm").val().replace(/(^\s*)|(\s*$)/g, "");
		var _bm = jQuery(".editbox #bm").val().replace(/(^\s*)|(\s*$)/g, "");
		var _sj = jQuery(".editbox #sj").val().replace(/(^\s*)|(\s*$)/g, "");
		if(_xm === ""){
			jQuery(".editbox .error-tips").text("");
		}
		else{
			jQuery(".editbox .error-tips").text("");
		}
		if(_bm === ""){
			jQuery(".editbox .error-tips").text("");
		}
		else{
			jQuery(".editbox .error-tips").text("");
		}
		if(_sj === ""){
			jQuery(".editbox .error-tips").text("");
		}
		else{
			if(_sj.replace(/^1[3|4|5|7|8][0-9]\d{8}$/,"")){
				jQuery(".editbox .error-tips").text("您输入的电话号码有误！");
				return;
			}
			else{
				jQuery(".editbox .error-tips").text("");
			}
		}
	});
});
function deletemanager(){//删除管理员
	if(!jQuery(".system-message").is(":animated")){//没有执行动画的情况下
		messageclose();
		jQuery(".tbody .check-box .on").parents(".row").remove();
		systips("系统提示","删除成功！");
	}
}
function addmanager(){//添加管理员
	if(!jQuery(".editbox").is(":animated")){//没有执行动画的情况下
		var _xm = jQuery(".editbox #xm").val().replace(/(^\s*)|(\s*$)/g, "");
		var _xb = jQuery(".editbox .rule-radios .on").text();
		var _bm = jQuery(".editbox #bm").val().replace(/(^\s*)|(\s*$)/g, "");
		var _js = jQuery(".editbox .select .selected").text();
		var _sj = jQuery(".editbox #sj").val().replace(/(^\s*)|(\s*$)/g, "");
		var _error = jQuery(".editbox .error-tips").text();
		if(_xm === ""){
			jQuery(".editbox .error-tips").text("请输入姓名！");
			return;
		}
		if(_xb === ""){
			jQuery(".editbox .error-tips").text("请选择性别！");
			return;
		}
		if(_bm === ""){
			jQuery(".editbox .error-tips").text("请输入部门！");
			return;
		}
		if(_js === ""){
			jQuery(".editbox .error-tips").text("请选择角色！");
			return;
		}
		if(_sj === ""){
			jQuery(".editbox .error-tips").text("请输入手机号！");
			return;
		}
		else{
			if(_sj.replace(/^1[3|4|5|7|8][0-9]\d{8}$/,"")){
				jQuery(".editbox .error-tips").text("您输入的电话号码有误！");
				return;
			}
			else{
				jQuery(".editbox .error-tips").text("");
			}
		}
		if(_xm !== "" && _xb !== "" && _bm !== "" && _js !== "" && _sj !== "" && _error === ""){
			var _row = jQuery('<div class="row"><div class="check"><div class="check-box"><i class="icon-check"></i></div></div><div class="xm">'+_xm+'</div><div class="xb">'+_xb+'</div><div class="bm">'+_bm+'</div><div class="js">'+_js+'</div><div class="sj">'+_sj+'</div><div class="cz"><a href="javascript:;" title="编辑" class="icon-edit">编辑</a><a href="javascript:;" title="重置密码" class="icon-changepassword">重置密码</a></div></div>');
			jQuery(".tbody").prepend(_row);
			if(jQuery(".checkall i").hasClass("on")){
				jQuery(".checkall i").removeClass("on");
			}
			editboxclose();
			systips("系统提示","添加成功！");
		}
	}
}
function editmanager(){//编辑管理员
	if(!jQuery(".editbox").is(":animated")){//没有执行动画的情况下
		var _xm = jQuery(".editbox #xm").val().replace(/(^\s*)|(\s*$)/g, "");
		var _xb = jQuery(".editbox .rule-radios .on").text();
		var _bm = jQuery(".editbox #bm").val().replace(/(^\s*)|(\s*$)/g, "");
		var _js = jQuery(".editbox .select .selected").text();
		var _sj = jQuery(".editbox #sj").val().replace(/(^\s*)|(\s*$)/g, "");
		var _error = jQuery(".editbox .error-tips").text();
		if(_xm === ""){
			jQuery(".editbox .error-tips").text("请输入姓名！");
			return;
		}
		if(_xb === ""){
			jQuery(".editbox .error-tips").text("请选择性别！");
			return;
		}
		if(_bm === ""){
			jQuery(".editbox .error-tips").text("请输入部门！");
			return;
		}
		if(_js === ""){
			jQuery(".editbox .error-tips").text("请选择角色！");
			return;
		}
		if(_sj === ""){
			jQuery(".editbox .error-tips").text("请输入手机号！");
			return;
		}
		else{
			if(_sj.replace(/^1[3|4|5|7|8][0-9]\d{8}$/,"")){
				jQuery(".editbox .error-tips").text("您输入的电话号码有误！");
				return;
			}
			else{
				jQuery(".editbox .error-tips").text("");
			}
		}
		if(_xm !== "" && _xb !== "" && _bm !== "" && _js !== "" && _sj !== "" && _error === ""){
			jQuery(".editnow .xm").text(_xm);
			jQuery(".editnow .xb").text(_xb);
			jQuery(".editnow .bm").text(_bm);
			jQuery(".editnow .js").text(_js);
			jQuery(".editnow .sj").text(_sj);
			editboxclose();
			systips("系统提示","修改成功！");
			jQuery(".editnow").removeClass("editnow");
		}
	}
}
function editcontent(title,xm,xb,bm,js,sj,callback,btnText){//编辑框内容
	var content = '<div class="line">';
		content+= '	<div class="line-left">姓名</div>';
		content+= '	<div class="line-right">';
		content+= '		<div class="input-box"><input type="text" class="input" id="xm" value="'+xm+'" placeholder="请输姓名" /></div>';
		content+= '	</div>';
		content+= '</div>';
		content+= '<div class="line">';
		content+= '	<div class="line-left">性别</div>';
		content+= '	<div class="line-right">';
		content+= '		<div class="rule-radios"><div class="rule-radio"><i class="icon-male"></i>男<em></em></div><div class="rule-radio"><i class="icon-female"></i>女<em></em></div></div>';
		content+= '	</div>';
		content+= '</div>';
		content+= '<div class="line">';
		content+= '	<div class="line-left">部门</div>';
		content+= '	<div class="line-right">';
		content+= '		<div class="input-box"><input type="text" class="input" id="bm" value="'+bm+'" placeholder="请输入部门" /></div>';
		content+= '	</div>';
		content+= '</div>';
		content+= '<div class="line">';
		content+= '<div class="line-left">角色</div>';
		content+= '	<div class="line-right">';
		content+= '		<div class="drop-down"><div class="select"><div class="selected">'+js+'</div><div class="select-list">';
		content+= '<li>管理员</li><li>超级管理员</li></div><div class="icon-dropdown"></div></div></div>';
		content+= '	</div>';
		content+= '</div>';
		content+= '<div class="line">';
		content+= '	<div class="line-left">手机号</div>';
		content+= '	<div class="line-right">';
		content+= '		<div class="input-box"><input type="tel" class="input" id="sj" value="'+sj+'" placeholder="请输入手机号" /></div>';
		content+= '	</div>';
		content+= '</div>';
		content+= '<div class="error-tips"></div>';
	var fuvalue ="";
	editbox(title,content,callback,btnText,fuvalue);
	if(js === ""){
		jQuery(".editbox .selected").text(jQuery(".editbox .select-list li:first").text());
	}
	if(xb === "男"){
		jQuery(".editbox .edit-content .rule-radio").eq(0).addClass("on");
	}
	if(xb === "女"){
		jQuery(".editbox .edit-content .rule-radio").eq(1).addClass("on");
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