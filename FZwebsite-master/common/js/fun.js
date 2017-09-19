//初始化标题
function settit(e) {
    $(e).addClass("showtit");
    var text = $(e).text();
    text = text.replace(/ /g, "^");
    var arr = text.split("");
    var html = "";
    for (var i = 0; i < arr.length; i++) {
        html += "<i style='transition-delay:0." + GetRandomNum(1, 7) + "s;-webkit-transition-delay:0." + GetRandomNum(1, 7) + "s'>" + arr[i] + "</i>";
    }
    html = html.replace(/\^/g, "&nbsp;");
    html = html.replace("> <", ">&nbsp;<");
    $(e).html(html);
}

//激活标题或文字
function showtt(e, delay) {
    setTimeout(function () {
        $(e).addClass("act");
    }, delay);
}
//移除标题或文字激活
function hidett(e) {
    $(e).find(".act").removeClass("act");
}

//响应试
var sto_css;
function cCss(maxw, minw, cla) {
    var ww = $(window).width()
    if (ww >= minw && ww <= maxw) {
        $("html").addClass(cla);
    } else {
        $("html").removeClass(cla);
    }
    $(window).resize(function () {
        clearTimeout(sto_css);
        sto_css = setTimeout(function () {
            cCss(maxw, minw, cla);
        }, 500);
    });
}
//初始化文字
function settxt(e){
    $(e).addClass("showtxt");
    var text=$.trim($(e).text());
    text=text.replace(/ /g,"^");
    var arr = text.split('^');
    var html="";
    $.each(arr,function (i) {
        if(!!arr[i]){
            var y=GetRandomNum(2,20)*0.1;
            html+="<i><b style='transition-delay:"+y+"s;-webkit-transition-delay:"+y+"s'>"+arr[i]+"&nbsp;</b></i>";
        }
    });
    $(e).html(html);
    $(e).find("b").addClass("h");
}


//获取随机数
function GetRandomNum(Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    return (Min + Math.round(Rand * Range));
}