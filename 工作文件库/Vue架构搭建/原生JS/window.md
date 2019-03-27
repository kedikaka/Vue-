##### window.location身上的方法
   window.location方法详解---- https://blog.csdn.net/weixin_38091374/article/details/79195864
示例：
　　http://www.home.com:8080/windows/location/page.html?ver=1.0&id=timlq#love
　　1, window.location.href
　　整个URl字符串(在浏览器中就是完整的地址栏)
　　返回值：http://www.home.com:8080/windows/location/page.html?ver=1.0&id=timlq#love
　　2,window.location.protocol
　　URL 的协议部分
　　返回值：http:
　　3,window.location.host
　　URL 的主机部分(带端口号)，
　　返回值：www.home.com:8080
    4、window.location.hostname(不带端口号)
        window.location.hostname
        返回值：www.home.com
　　5,window.location.port
　　URL 的端口部分。如果采用默认的80端口(update:即使添加了:80)，那么返回值并不是默认的80而是空字符。
　　本例返回值:8080
　　6,window.location.pathname
　　URL 的路径部分(就是文件地址)
　　返回值：/windows/location/page.html
　　7,window.location.search
　　查询(参数)部分。除了给动态语言赋值以外，我们同样可以给静态页面,并使用javascript来获得相信应的参数值
　　返回值：?ver=1.0&id=timlq
　　8,window.location.hash
　　锚点
　　返回值：#love
###### 页面reload
javascript页面刷新的几种方法 ------https://www.cnblogs.com/cfinder010/p/3852360.html
    window.location.reload()