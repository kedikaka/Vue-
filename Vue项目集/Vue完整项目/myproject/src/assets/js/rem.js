!function(e){function t(a){if(i[a])return i[a].exports;var n=i[a]={exports:{},id:a,loaded:!1};return e[a].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var i={};return t.m=e,t.c=i,t.p="",t(0)}([function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=window;t["default"]=i.flex=function(normal,e,t){var a=e||100,n=t||1,r=i.document,o=navigator.userAgent,d=o.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i),l=o.match(/U3\/((\d+|\.){5,})/i),c=l&&parseInt(l[1].split(".").join(""),10)>=80,p=navigator.appVersion.match(/(iphone|ipad|ipod)/gi),s=i.devicePixelRatio||1;p||d&&d[1]>534||c||(s=1);var u=normal?1:1/s,m=r.querySelector('meta[name="viewport"]');m||(m=r.createElement("meta"),m.setAttribute("name","viewport"),r.head.appendChild(m)),m.setAttribute("content","width=device-width,user-scalable=no,initial-scale="+u+",maximum-scale="+u+",minimum-scale="+u),r.documentElement.style.fontSize=normal?"50px": a/2*s*n+"px"},e.exports=t["default"]}]);  flex(false,100, 1);

/*---调整安卓手机软键盘遮挡输入框问题---*/
if(/Android [4-6]/.test(navigator.appVersion)) {
	window.addEventListener("resize", function() {
	if(document.activeElement.tagName=="INPUT" || document.activeElement.tagName=="TEXTAREA") {
	  window.setTimeout(function() {
		 document.activeElement.scrollIntoViewIfNeeded();
	  },0);
	}
 })
}
/**
	 * 处理iOS 微信客户端6.7.4 键盘收起页面未下移bug
*/
;(/iphone|ipod|ipad/i.test(navigator.appVersion)) && document.addEventListener('blur', function(e) {
    ['input', 'textarea'].includes(e.target.localName) && document.body.scrollIntoView(false)
}, true)

// /*
//  解决img标签，图片双击预览效果----取消图片的点击默认事件
//  * */
// $('img').on('click',function(event){event.preventDefault()})

		
/*--css移动端实现与pc端一样的:acitve效果--*/
document.body.addEventListener('touchstart',function(){});
