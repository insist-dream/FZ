
(function($) {
	$.fn.clients = function(options) {
		var opts = $.extend({},$.fn.mChange.defaults,options);
		var listcopy =opts.arr;
		cl=$(this);
		
		
		function delay(e,i){
			var s=GetRandomNum(3,6);
			choose(e);
			clearInterval(i);
			i=setInterval(function(){delay(e,i)},s*1000);
		}
		
		//派发随机动作
		if(cl.find(".scroll").size()==5){
			var s1,s2,s3,s4,s5;
			s1=setInterval(function(){delay(".s1",s1)},GetRandomNum(2,8)*1000);
			s2=setInterval(function(){delay(".s2",s2)},GetRandomNum(2,8)*1000);
			s3=setInterval(function(){delay(".s3",s3)},GetRandomNum(2,8)*1000);
			s4=setInterval(function(){delay(".s4",s4)},GetRandomNum(2,8)*1000);
			s5=setInterval(function(){delay(".s5",s5)},GetRandomNum(2,8)*1000);
			
		}
		function choose(e){
			//if(!cl.find(e).attr("class").match("hover")){
				//循环判断是否重复
				while(1>0){
					var x=0;
					var ac = GetRandomNum(0,listcopy.length-1);
					if(cl.find(".child[aid="+$(listcopy[ac]).attr("aid")+"]").size()==0){
						cl.find(e).append(listcopy[ac]);
						cl.find(e).animate({scrollTop:80},"slow",function(){cl.find(e).find(".child:first").remove();});
						break;
					}
				}	
			//}
		}
	
		//显示摘要
		/*$("#client .scroll").hover(
			function(){
				$(this).addClass("hover");
				$(this).find("h2").stop().animate({marginTop:-50},300);
			},
			function(){
				$(this).removeClass("hover");
				$(this).find("h2").stop().animate({marginTop:15},300);
			}
		);*/
	}

	$.fn.clients.defaults = {
			 arr : ""
	}
})(jQuery);

//默认列表数组
/*var listcopy = new Array(
'<div class="child" aid="53"><span><img src="http://2014.fractal-technology.com/uploads/allimg/131020/1-131020233K50-L.png" alt="海辉软件" title="海辉软件" /></span></div>'
,'<div class="child" aid="54"><span><img src="http://2014.fractal-technology.com/uploads/allimg/131020/1-131020233T00-L.png" alt="立思辰" title="立思辰" /></span></div>'
,'<div class="child" aid="66"><span><img src="http://2014.fractal-technology.com/uploads/allimg/131020/1-1310202349440-L.png" alt="软通动力" title="软通动力" /></span></div>'
,'<div class="child" aid="50"><span><img src="http://2014.fractal-technology.com/uploads/allimg/131020/1-1310202335090-L.png" alt="神州数码" title="神州数码" /></span></div>'
,'<div class="child" aid="130"><span><img src="http://2014.fractal-technology.com/uploads/allimg/150504/1-150504142951E4.png" alt="阜丰集团" title="阜丰集团" /></span></div>'
,'<div class="child" aid="125"><span><img src="http://2014.fractal-technology.com/uploads/allimg/150325/1-150325162JL30.png" alt="博天环境" title="博天环境" /></span></div>'
,'<div class="child" aid="131"><span><img src="http://2014.fractal-technology.com/uploads/allimg/150504/1-150504143341449.png" alt="天创国际演艺制作交流有限..." title="天创国际演艺制作交流有限..." /></span></div>'
,'<div class="child" aid="78"><span><img src="http://2014.fractal-technology.com/uploads/allimg/140114/1-140114105922H8.png" alt="corbis" title="corbis" /></span></div>'
,'<div class="child" aid="65"><span><img src="http://2014.fractal-technology.com/uploads/allimg/131020/1-131020234U80-L.png" alt="华彬集团" title="华彬集团" /></span></div>'
,'<div class="child" aid="107"><span><img src="http://2014.fractal-technology.com/uploads/allimg/140624/1-140624164516191.png" alt="理光" title="理光" /></span></div>'
);*/