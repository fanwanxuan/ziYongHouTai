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
	

/*审查*/
function deletenews(){
	if(!jQuery(".system-message").is(":animated")){//没有执行动画的情况下
		messageclose();
		jQuery(".tbody .check-box .on").parents(".row").remove();
		systips("系统提示","删除成功！");
	}
}
//审核和人工调账

		 jQuery(".dzqr" ).on("click",function(){ 
			    var content='';
				var title="对账审核";
				 content+="<li>&nbsp;&nbsp;&nbsp;结算日期：<span>2017-03-02</span></li>"+
				         "<li>&nbsp;&nbsp;&nbsp;结构名称：<span>成都八一骨科</span></li>"+
				         "<li>&nbsp;&nbsp;&nbsp;结算笔数：<span>520笔</span></li>"+
				         "<li>&nbsp;&nbsp;&nbsp;结算金额：<span>5220元</span></li>"+
				         "<li>&nbsp;&nbsp;&nbsp;分成比例：<span>5%</span></li>"+
				         "<li>&nbsp;&nbsp;&nbsp;机构所得：<span>200元</span></li>"+
				          "<div class='Line'></div>"+
				         "<div class='adjustment hide'>"+
				         "<div class='amount'>结算金额(元)：<input type='number'/></div>"+
				         "<div class='marks'><span>备注：</span><textarea name='name' cols=40 rows=4 placeholder='请输入备注'></textarea></div>"+
				          "<div class='message-btns'><a href='javascript:manualAdjustmentExamine();' class='yes'>确定调账</a></div>"+
				         "</div>";
			
				
				var callback="examine";
				var fuvalue="";
				sysmessage(title,content,callback,fuvalue);
			
		}); 
	
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
//     $('.cancel').parents(".message-btns").remove();
	}
}
function sysmessage(title,content,callback,fuvalue){//弹出层消息
	var _message = jQuery('<section class="system-message"><div class="message-title"><i class="close" onclick="javascript:messageclose();">关闭</i><span>'+title+'</span></div><div class="message-content"><ul>'+content+'</ul></div><div class="message-btns"><a href="javascript:void(0);" onclick="javascript:messageclose();" class="yes">确定</a><a href="javascript:manualAdjustment();" class="cancel">人工调账</a></div></section>');
	_message.appendTo("body");
	popup();
	jQuery(".message-btns a:first").focus();
}