### iOS/Android 浏览器(h5)及微信中唤起本地APP
https://www.cnblogs.com/shadajin/p/5724117.html


    // 下载app
    function onDownload() {
        var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
        var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        if (isAndroid) {
            var url = "https://android.myapp.com/myapp/detail.htm?apkName=com.niwodai.studentfooddiscount";
            window.location.href = url;
        }else if (isIOS) {
            var url = "https://itunes.apple.com/cn/app/%E5%AD%A6%E5%AD%90%E5%8D%A1/id1433926997?mt=8";
            window.location.href = url;
        }else{
            var url = "https://android.myapp.com/myapp/detail.htm?apkName=com.niwodai.studentfooddiscount";
            window.location.href = url;
        }
    }
