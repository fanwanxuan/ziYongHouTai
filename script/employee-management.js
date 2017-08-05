//time:217-06-27
//made by: kami
jQuery(document).ready(function(){
	jQuery(".shortcut-btns .delete").live("click",function(){//批量删除人员
		if(jQuery(".tbody .check-box .on").length>0){
			var name = "";
			for(var i = 0;i < jQuery(".tbody .check-box").length;i++){
				if(jQuery(".tbody .check-box").eq(i).find("i").hasClass("on")){
					name += "“<em>"+jQuery(".tbody .row").eq(i).find(".name").text()+"</em>”";
				};
			}
			var title="系统提示";
			var content="<li>你确定要删除"+name+"吗？</li>";
			var callback="deleteperson";
			var fuvalue="";
			sysmessage(title,content,callback,fuvalue);
		}
	});
	//添加人员
	jQuery(".shortcut-btns .add").live("click",function(){
		editcontent("添加人员","","","","addperson","添  加");
	});
	//编辑人员
	jQuery(".tbody .icon-edit").live("click",function(){
		var name = jQuery(this).parents(".row").find(".name").text();
		var gender = jQuery(this).parents(".row").find(".gender").text();
		var phone = jQuery(this).parents(".row").find(".tel").text();
		jQuery(this).parents(".row").addClass("editnow");
		editcontent("编辑人员信息",name,gender,phone,"editperson","保  存");
	});
/*	//修改密码
	jQuery(".tbody .icon-changepassword").live("click",function(){
		changepass("修改密码","changepassword","保  存");
	});*/
	//选择性别
	jQuery(".editbox .gender").live("click",function(){
		jQuery(this).parents(".line").find(".gender").removeClass("on");
		jQuery(this).addClass("on");
	});
	//判断输入是否为中文姓名
	jQuery(".editbox #name").live("focusout",function(){
		var _cn = /^[\u4e00-\u9fa5]+$/;
		var _name = jQuery(this).val().replace(/(^\s*)|(\s*$)/g, "");
		if(_name !==""){
			if(!_cn.test(_name)){
				jQuery(".editbox #name").addClass("error");
				jQuery(".editbox .error-tips").text("您输入的姓名有误！");
			}
			else{
				jQuery(".editbox .error-tips").text("");
				jQuery(".editbox #name").removeClass("error");
			}
		}
		else{
			jQuery(".editbox #name").val("");
			jQuery(".editbox .error-tips").text("");
			jQuery(".editbox #name").removeClass("error");
		}
	});
	//判断电话号码
	jQuery(".editbox #tel").live("focusout",function(){
		var _phonenumber = jQuery(this).val().replace(/(^\s*)|(\s*$)/g, "");
		if(_phonenumber!==""){
			if(_phonenumber.replace(/^1[3|4|5|7|8][0-9]\d{8}$/,"")){
				jQuery(".editbox #tel").addClass("error");
				jQuery(".editbox .error-tips").text("您输入的电话号码有误！");
			}
			else{
				jQuery(".editbox #tel").removeClass("error");
				jQuery(".editbox .error-tips").text("");
			}
		}
		else{
			jQuery(".editbox #tel").val("");
			jQuery(".editbox .error-tips").text("");
			jQuery(".editbox #tel").removeClass("error");
		}
	});
});
function deleteperson(){//删除人员
	if(!jQuery(".editbox").is(":animated")){//没有执行动画的情况下
		messageclose();
		jQuery(".tbody .check-box .on").parents(".row").remove();
		systips("系统提示","删除成功！");
	}
}
function addperson(){//确认添加人员
	if(!jQuery(".editbox").is(":animated")){//没有执行动画的情况下
		var _name = jQuery(".editbox #name").val().replace(/(^\s*)|(\s*$)/g, "");
		var _gender = jQuery(".editbox .edit-content .on").text();
		var _phone = jQuery(".editbox #tel").val().replace(/(^\s*)|(\s*$)/g, "");
		var _error = jQuery(".editbox .error-tips").text();
		if(_name === ""){
			jQuery(".editbox .error-tips").text("请输入姓名！");
			return;
		}
		else{
			var _cn = /^[\u4e00-\u9fa5]+$/;
			if(!_cn.test(_name)){
				jQuery(".editbox .error-tips").text("您输入的姓名有误！");
				return;
			}
			else{
				jQuery(".editbox .error-tips").text("");
			}
		}
		if(_gender === ""){
			jQuery(".editbox .error-tips").text("请选择性别！");
			return;
		}
		if(_phone === ""){
			jQuery(".editbox .error-tips").text("请输入电话号码！");
			return;
		}
		else{
			if(_phone.replace(/^1[3|4|5|7|8][0-9]\d{8}$/,"")){
				jQuery(".editbox .error-tips").text("您输入的电话号码有误！");
				return;
			}
			else{
				jQuery(".editbox .error-tips").text("");
			}
		}
		if(_name !== "" && _gender !== "" && _phone !== "" && _error === ""){
			var _row = jQuery('<div class="row"><div class="check"><div class="check-box"><i class="icon-check"></i></div></div><div class="name">'+_name+'</div><div class="gender">'+_gender+'</div><div class="tel">'+_phone+'</div><div class="cz"><a href="javascript:;" title="编辑" class="icon-edit">编辑</a><a href="javascript:;" title="修改密码" class="icon-changepassword">修改密码</a></div></div>');
			jQuery(".tbody").prepend(_row);
			editboxclose();
			systips("系统提示","添加成功！");
		}
	}
}
function editperson(){//保存编辑人员信息
		if(!jQuery(".editbox").is(":animated")){//没有执行动画的情况下
		var _name = jQuery(".editbox #name").val().replace(/(^\s*)|(\s*$)/g, "");
		var _gender = jQuery(".editbox .edit-content .on").text();
		var _phone = jQuery(".editbox #tel").val().replace(/(^\s*)|(\s*$)/g, "");
		var _error = jQuery(".editbox .error-tips").text();
		if(_name === ""){
			jQuery(".editbox .error-tips").text("请输入姓名！");
			return;
		}
		else{
			var _cn = /^[\u4e00-\u9fa5]+$/;
			if(!_cn.test(_name)){
				jQuery(".editbox .error-tips").text("您输入的姓名有误！");
				return;
			}
			else{
				jQuery(".editbox .error-tips").text("");
			}
		}
		if(_gender === ""){
			jQuery(".editbox .error-tips").text("请选择性别！");
			return;
		}
		if(_phone === ""){
			jQuery(".editbox .error-tips").text("请输入电话号码！");
			return;
		}
		else{
			if(_phone.replace(/^1[3|4|5|7|8][0-9]\d{8}$/,"")){
				jQuery(".editbox .error-tips").text("您输入的电话号码有误！");
				return;
			}
			else{
				jQuery(".editbox .error-tips").text("");
			}
		}
		if(_name !== "" && _gender !== "" && _phone !== "" && _error === ""){
			jQuery(".editnow .name").text(_name);
			jQuery(".editnow .gender").text(_gender);
			jQuery(".editnow .tel").text(_phone);
			editboxclose();
			systips("系统提示","修改成功！");
			jQuery(".editnow").removeClass("editnow");
		}
	}
}
/*function changepassword(){//确认修改密码
	if(!jQuery(".editbox").is(":animated")){//没有执行动画的情况下
		var _password = jQuery(".editbox #password").val();
		var _confirm = jQuery(".editbox #confirm").val();
		if(_password===""){
			jQuery(".editbox .error-tips").text("请输入密码！");
			return;
		}
		else{
			jQuery(".editbox .error-tips").text("");
		}
		if(_confirm===""){
			jQuery(".editbox .error-tips").text("请确认密码！");
			return;
		}
		else{
			jQuery(".editbox .error-tips").text("");
		}
		if(_password !== _confirm){
			jQuery(".editbox .error-tips").text("两次输入的密码不一致！");
			return;
		}
		else{
			jQuery(".editbox .error-tips").text("");
		}
		if(_password !== "" && _confirm !== "" && _password === _confirm){
			editboxclose();
			systips("系统提示","密码修改成功！");
		}
	}
}*/
function editcontent(title,name,gender,phone,callback,btnText){//编辑框内容
	var content = '<div class="line">';
		content+= '<div class="line-left">姓    名</div>';
		content+= '	<div class="line-right">';
		content+= '		<div class="input-box"><input type="text" class="input" id="name" value="'+name+'" placeholder="请输入姓名" /></div>';
		content+= '	</div>';
		content+= '</div>';
		content+= '<div class="line">';
		content+= '	<div class="line-left">性    别</div>';
		content+= '	<div class="line-right">';
		content+= '		<div class="gender"><i class="icon-male"></i>男<em></em></div>';
		content+= '		<div class="gender"><i class="icon-female"></i>女<em></em></div>';
		content+= '	</div>';
		content+= '</div>';
		content+= '<div class="line">';
		content+= '	<div class="line-left">手机号</div>';
		content+= '	<div class="line-right">';
		content+= '		<div class="input-box"><input type="tel" class="input" id="tel" value="'+phone+'" placeholder="请输入手机号" /></div>';
		content+= '	</div>';
		content+= '</div>';
		content+= '<div class="error-tips"></div>';
	var fuvalue ="";
	editbox(title,content,callback,btnText,fuvalue);
	if(gender === "男"){
		jQuery(".editbox .edit-content .gender").eq(0).addClass("on");
	}
	if(gender === "女"){
		jQuery(".editbox .edit-content .gender").eq(1).addClass("on");
	}
}
/*function changepass(title,callback,btnText){//修改密码
	var content = '<div class="line">';
		content+= '<div class="line-left">密      码</div>';
		content+= '	<div class="line-right">';
		content+= '		<div class="input-box"><input type="password" class="input" id="password" value="" placeholder="请输入密码" /></div>';
		content+= '	</div>';
		content+= '</div>';
		content+= '<div class="line">';
		content+= '<div class="line-left">确认密码</div>';
		content+= '	<div class="line-right">';
		content+= '		<div class="input-box"><input type="password" class="input" id="confirm" value="" placeholder="请确认密码" /></div>';
		content+= '	</div>';
		content+= '</div>';
		content+= '<div class="error-tips"></div>';
	var fuvalue ="";
	editbox(title,content,callback,btnText,fuvalue);
}*/
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