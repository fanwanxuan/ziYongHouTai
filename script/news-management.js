//time:217-06-27
//made by: kami
/*jQuery(document).ready(function(){
	jQuery(".shortcut-btns .delete").live("click",function(){//批量删除人员
		if(jQuery(".tbody .check-box .on").length>0){
			var name = "";
			for(var i = 0;i < jQuery(".tbody .check-box").length;i++){
				if(jQuery(".tbody .check-box").eq(i).find("i").hasClass("on")){
					name += "“<em>"+jQuery(".tbody .row").eq(i).find(".wzbt").text()+"</em>”";
				};
			}
			var title="系统提示";
			var content="<li>你确定要删除"+name+"吗？</li>";
			var callback="deletenews";
			var fuvalue="";
			sysmessage(title,content,callback,fuvalue);
		}
	});
});*/
function deletenews(){
	if(!jQuery(".system-message").is(":animated")){//没有执行动画的情况下
		messageclose();
		jQuery(".tbody .check-box .on").parents(".row").remove();
		systips("系统提示","删除成功！");
	}
}
//删除 新闻
function operation (name){
		 jQuery(".shortcut-btns " +name ).live("click",function(){//批量删除人员
			if(jQuery(".tbody .check-box .on").length>0){
				var title="系统提示";
				var content="<li><span><img src='images/new-detail.png' /></span>你确定要删除选中的新闻吗？</li>";
				var callback="deleteclassify";
				var fuvalue="";
				sysmessage(title,content,callback,fuvalue);
			}
		}); 
	}

function deleteclassify(){//删除版块
	if(!jQuery(".system-message").is(":animated")){//没有执行动画的情况下
		messageclose();
		jQuery(".tbody .check-box .on").parents(".row").remove();
		systips("系统提示","删除成功！");
	}
}



/*推送至轮播 pushCarousel */
function  pushCarousel(name){
	 jQuery(".shortcut-btns " +name ).live("click",function(){//批量删除人员
			if(jQuery(".tbody .check-box .on").length>0){
				var title="系统提示";
				var content="<li><span><img src='images/banner-icon.png' /></span>你确定要推送选中的新闻至轮播吗？</li>";
				var callback="successL";
				var fuvalue="";
				sysmessage(title,content,callback,fuvalue);
			}
		}); 
}
/*推送至文字 pushWords */
function  pushWords(name){
	 jQuery(".shortcut-btns " +name ).live("click",function(){//批量删除人员
			if(jQuery(".tbody .check-box .on").length>0){
				var title="系统提示";
				var content="<li><span><img src='images/word-icon.png' /></span>你确定要推送选中的新闻至文字吗？</li>";
				var callback="successL";
				var fuvalue="";
				sysmessage(title,content,callback,fuvalue);
			}
		}); 
}

/*推送成功*/

function successL(){//删除版块
	if(!jQuery(".system-message").is(":animated")){//没有执行动画的情况下
		messageclose();
		systips("系统提示","推送成功！");
	}
}
