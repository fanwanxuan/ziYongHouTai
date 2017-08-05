//time:2017-06-27
//made by:kami

jQuery(window).load(function(){
	//单选
	jQuery(".radio").live("click",function(){
		jQuery(this).parents(".radios").find(".radio").removeClass("on");
		jQuery(this).addClass("on");
	});
	//方形单选
	jQuery(".rule-radio").live("click",function(){
		jQuery(this).parents(".rule-radios").find(".rule-radio").removeClass("on");
		jQuery(this).addClass("on");
	});
	//复选框单个选择
	jQuery(".tbody .icon-check").live("click",function(){
		jQuery(this).toggleClass("on");
		var _check = jQuery(".tbody .check-box").length;
		var _checked = jQuery(".tbody .check-box .on").length;
		if(_check === _checked){
			jQuery(".checkall i").addClass("on");
		}
		else{
			jQuery(".checkall i").removeClass("on");
		}
	});
	//复选框全选
	jQuery(".checkall i.icon-check").live("click",function(){
		if(jQuery(this).hasClass("on")){
			jQuery(this).removeClass("on");
			jQuery(".tbody .check-box i").removeClass("on");
		}
		else{
			jQuery(this).addClass("on");
			jQuery(".tbody .check-box i").addClass("on");
		}
	});
	//展开下拉项
	jQuery(".drop-down .select").live("click",function(e){
		e.stopPropagation();
		if(jQuery(this).parent().hasClass("show")){
			jQuery(this).parent().removeClass("show");
		}
		else{
			jQuery(".drop-down").removeClass("show");
			jQuery(this).parent().addClass("show");
		}
	});
	//选择下拉内容
	jQuery(".drop-down .select-list li").live("click",function(e){
		e.stopPropagation();
		var _select = jQuery(this).text();
		jQuery(this).parents(".select").find(".selected").text(_select);
		jQuery(this).parents(".drop-down").removeClass("show");
	});
	//点击页面关闭下拉列表
	jQuery(document).live("click",function(){
		jQuery(".drop-down").removeClass("show");
	});
	//判断电话号码
	jQuery(".input[type=tel]").live("focusout",function(){
		var _phonenumber = jQuery(this).val().replace(/(^\s*)|(\s*$)/g, "");
		if(_phonenumber!==""){
			if(_phonenumber.replace(/^1[3|4|5|7|8][0-9]\d{8}$/,"")){
				jQuery(this).addClass("error");
			}
			else{
				jQuery(this).removeClass("error");
			}
		}
		else{
			jQuery(this).val("");
			jQuery(this).removeClass("error");
		}
	});
	//按键功能
	jQuery(document).keydown(function(event) {	
		if(event.which === 13){//enter
			if(jQuery(".find .input-box input").is(":focus")){//回车查找
				jQuery(".find .input-box input").blur();
				jQuery(".find a.find-btn").click();
			}
			if(jQuery(".editbox").length>0 && !jQuery(".editbox").is(":animated")){//有编辑框时，回车确认
				jQuery(".editbox .edit-btns a:first").click();
			}
			if(jQuery(".system-message").length>0 && !jQuery(".system-message").is(":animated")){//有消息弹框时，回车确认
				jQuery(".system-message .message-btns a:first").click();
			}
		}
		if(event.which === 46){//delete
			if(jQuery(".pop-up-bg").length<1 && jQuery(".table .check-box .on").length>0){//选中删除
				jQuery(".shortcut-btns a.delete").click();
			}
		}
		if(event.which === 27){//esc
			if(jQuery(".editbox").length>0){//取消编辑框
				jQuery(".editbox .close").click();
			}
			if(jQuery(".system-message").length>0){//取消编辑框
				jQuery(".system-message .close").click();
			}
		}
	});
	//顶部修改密码
	jQuery(".top-menu a").live("click",function(){
		var _btn = jQuery(this).find("i").attr("class");
		if(_btn === "icon-changepassword"){
			//显示密码修改框
			var title = "修改密码";//弹窗标题
			var content = "<div class='topset'>";//弹窗内容
			content += "<div class='set-line'><label class='line-l' for='old'>旧密码：</label><input type='password' id='old' value='' /></div>";//弹窗内容
			content += "<div class='set-line'><label class='line-l' for='new'>新密码：</label><input type='password' id='new' value='' /></div>";//弹窗内容
			content += "<div class='set-line'><label class='line-l' for='confirm'>确认密码：</label><input type='password' id='confirm' value='' /></div>";//弹窗内容
			content += "<div class='error-line'>错误提示</div>";//弹窗内容
			content += "<div class='clear'></div></div>";//弹窗内容
			var callback = "changepassword";//调用函数
			var fuvalue = "";//调用函数传值
			sysmessage(title,content,callback,fuvalue);
		}
	});
});
//显示遮罩层
function popupbgshow(){
	var popupbg = jQuery(".pop-up-bg").length;
	if(popupbg<1){
	   var _popupbg = jQuery('<div class="pop-up-bg"><div class="bg"></div></div>');
		_popupbg.appendTo("body");
	 }
	jQuery(".pop-up-bg").fadeIn();
}
//显示弹出层
function popup(){
	popupbgshow();
	var popupwidth = jQuery(".system-message").width()/2;//页面宽度
	var popupheight = jQuery(".system-message").height()/2;//页面高度
	jQuery(".system-message").css("margin-left",-popupwidth);
	jQuery(".system-message").css("margin-top",-popupheight);
	jQuery(".system-message").fadeIn();
}
//关闭弹出层
function messageclose(){
	jQuery(".system-message").fadeOut(function(){
		jQuery(".system-message").remove();
	});
	jQuery(".pop-up-bg").fadeOut(function(){
		jQuery(".pop-up-bg").remove();
	});
}
function sysmessage(title,content,callback,fuvalue){//弹出层消息
	var _message = jQuery('<section class="system-message"><div class="message-title"><i class="close" onclick="javascript:messageclose();">关闭</i><span>'+title+'</span></div><div class="message-content"><ul>'+content+'</ul></div><div class="message-btns"><a href="javascript:'+callback+'('+fuvalue+');" class="yes">确定</a><a href="javascript:messageclose();" class="cancel">取消</a></div></section>');
	_message.appendTo("body");
	popup();
	jQuery(".message-btns a:first").focus();
}
function systips(title,content){//冒泡消息
	var bubblesize = jQuery(".bubble").length;
	if(bubblesize<1){
	   var _bubble = jQuery('<div class="bubble"></div>');
		_bubble.appendTo("body");
	 }
	var _datanum = parseInt(Math.random()*100000);
	var bubblehtml = jQuery('<div class="c-box" data-num="'+_datanum+'"><div class="bubble-title">'+title+'</div><div class="bubble-content">'+content+'</div></div>');
	bubblehtml.appendTo(".bubble");
	jQuery(".c-box[data-num='"+_datanum+"']").fadeIn().delay(3000).fadeOut("",function(){
		jQuery(".c-box[data-num='"+_datanum+"']").remove();
	});
}
//修改密码
function changepassword(){
	if(!jQuery(".system-message").is(":animated")){//没有执行动画的情况下
	//验证旧密码和提交新密码
		messageclose();
		systips("系统提示","密码修改成功！");
	}
}