$(document).ready(function(){
	
	$("#hidden-button").click(function(e){
		//阻止事件向上传递
		e.stopPropagation();
		//如果被选元素可见，则隐藏这些元素，如果被选元素隐藏，则显示这些元素。
		$("#dropdown-menu").toggle(); 
	});
	$(document).on('click',function(){$("#dropdown-menu").hide()});
});
