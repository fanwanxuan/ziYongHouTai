/*点击展开或隐藏*/
	$('.xq i').on('click',function(){
		/*判断当前点击的元素以外的元素是否有top类，如果有，就隐藏掉*/
		if($(this).parents(".row").siblings(".row").children(".xq").children("i").hasClass('top')){
			$(".top").parent().next(".OpenOrHide").toggle();
			$(".top").removeClass("top");
		}
		/*判断当前点击的元素是否有这个类*/
		if($(this).hasClass('top')){
			$(this).removeClass("top")
		}else{
			$(this).addClass("top")
		}
		$(this).parent().next().toggle();
	});
	
	function state(name){
		alert(name);
	}

/*审查*/
function deletenews(){
	if(!jQuery(".system-message").is(":animated")){//没有执行动画的情况下
		messageclose();
		jQuery(".tbody .check-box .on").parents(".row").remove();
		systips("系统提示","删除成功！");
	}
}
//人工补录
		function state(name){
			 var content='';
			 var flag = false;
			 var time= "";
		     var title='结算'+name+'详情';
		     if(name =="失败"){
		     	time = "----------"
		     }else{
		     	time = "2015-12-12 12:25:20"
		     }
		     	content+="<li>&nbsp;&nbsp;&nbsp;结算日期：<span>2017-03-02</span></li>"+
					         "<li>&nbsp;&nbsp;&nbsp;机构名称：<span>成都军区八一骨科医院体检中心</span></li>"+
					         "<li>&nbsp;&nbsp;&nbsp;收款方式：<span>微信</span></li>"+
					         "<li>&nbsp;&nbsp;&nbsp;收款账号：<span>15456455345464</span></li>"+
					         "<li>&nbsp;&nbsp;&nbsp;收款名称：<span>大大</span></li>"+
					         "<li>&nbsp;&nbsp;&nbsp;结算方式：<span>人工补录</span></li>"+
					         "<li>&nbsp;&nbsp;&nbsp;转账方式：<span>微信转账</span></li>"+
					         "<li>&nbsp;&nbsp;&nbsp;通道手续费：<span>10元</span></li>"+
					         "<li>&nbsp;&nbsp;&nbsp;到账时间：<span>"+ time+"</span></li>";
			    var callback="examine";
				var fuvalue="";
				sysmessage(name,title,content,callback,fuvalue);
				
		}
/*审核*/
function examine(){//审核成功
	if(!jQuery(".system-message").is(":animated")){//没有执行动画的情况下
		jQuery(".tbody .check-box .on").parents(".row").remove();
		systips("系统提示","审核成功！");
	}
}

/*人工调账审核成功*/
function manualAdjustmentExamine(){//审核成功
	if(!jQuery(".system-message").is(":animated")){//没有执行动画的情况下
			jQuery(".system-message").remove();
		jQuery(".pop-up-bg").remove();
		systips("系统提示","人工调账成功！");
	}
}

/*重置 ，把取消改成人工调账*/
//点击人工调账 按钮 弹出层
function messageclose(){
	jQuery(".system-message").fadeOut(function(){
		jQuery(".system-message").remove();
	});
	jQuery(".pop-up-bg").fadeOut(function(){
		jQuery(".pop-up-bg").remove();
	});
}
function manualAdjustment(){
$('.cancel').parents(".message-btns").siblings(".message-content").children("ul").children(".adjustment").addClass("hide");	
	if($('.cancel').parents(".message-btns").siblings(".message-content").children("ul").children(".adjustment").hasClass('hide')){
	   $('.cancel').parents(".message-btns").siblings(".message-content").children("ul").children(".adjustment").removeClass("hide");
	   $('.cancel').parents(".message-btns").remove();
	}else{
       $('.cancel').parents(".message-btns").siblings(".message-content").children("ul").children(".adjustment").addClass("hide");	
	}
}
//按钮 这儿是重新复制的
//因为按钮文字要改动
function sysmessage(name,title,content,callback,fuvalue){//弹出层消息
	if(name =="失败"){
		var button = "人工补录";
	} else {
		var button = "确定";
	}
	var _message = jQuery('<section class="system-message"><div class="message-title"><i class="close" onclick="javascript:messageclose();">关闭</i><span>'+title+'</span></div><div class="message-content"><ul>'+content+'</ul></div><div class="message-btns"><a href="javascript:messageclose();" class="yes">'+ button +'</a><a href="javascript:messageclose();" class="cancel">关闭</a></div></section>');
	_message.appendTo("body");
	popup();
	jQuery(".message-btns a:first").focus();
}