首屏 Loading，代码段分享，拿走即用~
function loading(){

    function Load(){}

    Load.prototype.loadImgs = function(urls,callback) {
        this.urls = urls;
        this.imgNumbers = urls.length;
        this.loadImgNumbers = 0;
        var that =this;
        for(var i=0;i<urls.length;i++){
            var obj = new Image();
            obj.src = urls[i];
            obj.onload = function(){
                that.loadImgNumbers++;
                callback(parseInt((that.loadImgNumbers/that.imgNumbers)*100));
            }
        }
    };

    var loader = new Load();

    loader.loadImgs([
        // 将所有需要加载的图片地址写于此处
        "http://domain/site/dist/img/XX.png",
        "http://domain/site/dist/img/XX.png",
        "http://domain/site/dist/img/XX.png",
        "http://domain/site/dist/img/XX.png",
        "http://domain/site/dist/img/XX.png",
        "http://domain/site/dist/img/XX.png",
        "http://domain/site/dist/img/XX.png"
    ],function(percent){
        // 假设显示百分比的元素为 $(".percent")
        $(".percent").text(percent+'%');
        
        // 加载结束后，隐藏相应的 loading 或遮罩 
        if(percent==100) {
            $(".mask").css('display','none');
        }
    });
}

// 执行 loading 方法
loading();

作者：Alexee
链接：https://www.jianshu.com/p/e95824e8fe13
來源：简书
简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。

### img标签的src不能设置为空
$(".xiangce-div img").each(function()
{
    if($(this).attr("src").length==0){
        $(this).attr("src"," http://www.6green.com/topic/images/photo.gif");
        $(this).css({"display":'none'})
    }else{
         $(this).css({"display":'block'})
    }
});