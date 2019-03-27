#### JQ常用的选择器
    $('li:first')    //第一个元素
    $('li:last')     //最后一个元素
    $("tr:even")     //索引为偶数的元素，从 0 开始
    $("tr:odd")      //索引为奇数的元素，从 0 开始
    $(":focus")      //当前获取焦点的元素
    $(":animated")   //正在执行动画效果的元素

    $("p").eq(0)       //当前操作中第N个jQuery对象,类似索引
    $("tr:eq(1)")    //给定索引值的元素
    $("div").children()      //div中的每个子元素,第一层
    $("div").find("span")    //div中的包含的所有span元素,子子孙孙
    $("div").siblings()      //所有的同辈元素,不包括自己
    $("p").parent()          //每个p元素的父元素
    $("p").prev()            //紧邻p元素前的一个同辈元素
    $("p").next()       　　　//紧邻p元素后的一个同辈元素

#### JQ的属性操作
    $("img").attr("src");    　　　　　　 //返回文档中所有图像的src属性值
    $("img").attr("src","test.jpg");    //设置所有图像的src属性
    $("img").removeAttr("src");    　　　//将文档中图像的src属性删除

    $("input[type='checkbox']").prop("checked", true);    //选中复选框
    $("input[type='checkbox']").prop("checked", false);
    $("img").removeProp("src");    　　 //删除img的src属性

#### JQ class 操作
    $("p").addClass("selected");    　　//为p元素加上 'selected' 类
    $("p").removeClass("selected");    //从p元素中删除 'selected' 类
    $("p").toggleClass("selected");    //如果存在就删除,否则就添加
#### JQ css 操作
    $("p").css("color");          //访问查看p元素的color属性
    $("p").css("color","red");    //设置p元素的color属性为red
    $("p").css({ "color": "red", "background": "yellow" });    //设置p元素的color为red，background属性为yellow（设置多个属性要用{}字典形式）
#### JQ 位置操作
    $('p').offset()     //元素在当前视口的相对偏移,Object {top: 122, left: 260}
    $('p').offset().top
    $('p').offset().left
    $("p").position()   //元素相对父元素的偏移,对可见元素有效，Object {top: 117, left: 250}

    $(window).scrollTop()    //获取滚轮滑的高度
    $(window).scrollLeft()   //获取滚轮滑的宽度
    $(window).scrollTop('100')    //设置滚轮滑的高度为100

#### 元素的增删改查
内部插入
    $("p").append("<b>nick</b>");    //每个p元素内后面追加内容
    $("p").appendTo("div");    　　　 //p元素追加到div内后
    $("p").prepend("<b>Hello</b>");  //每个p元素内前面追加内容
    $("p").prependTo("div");    　   //p元素追加到div内前
外部插入
    $("p").after("<b>nick</b>");     //每个p元素同级之后插入内容
    $("p").before("<b>nick</b>");    //在每个p元素同级之前插入内容
    $("p").insertAfter("#test");     //所有p元素插入到id为test元素的后面
    $("p").insertBefore("#test");    //所有p元素插入到id为test元素的前面
替换
    $("p").replaceWith("<b>Paragraph. </b>");    //将所有匹配的元素替换成指定的HTML或DOM元素
    $("<b>Paragraph. </b>").replaceAll("p");     //用匹配的元素替换掉所有 selector匹配到的元素
删除
    $("p").empty();     //删除匹配的元素集合中所有的子节点，不包括本身
    $("p").remove();    //删除所有匹配的元素,包括本身
    $("p").detach();    //删除所有匹配的元素(和remove()不同的是:所有绑定的事件、附加的数据会保留下来)
复制
    $("p").clone()    　　//克隆元素并选中克隆的副本
    $("p").clone(true)   //布尔值指事件处理函数是否会被复制
#### JQ常用事件

##### 页面载入成功之后，执行的函数 
    我们一般把所有的JS代码写在这里面
    $(document).ready(function{
    });
    简写形式：
    $(function(){

    });
##### 绑定和解绑事件
    为每一个匹配的元素绑定事件处理函数，绑定多个的时候用{“事件名”：function(){},"事件名2"：function(){}}
    $("p").bind("click", function(){
        alert( $(this).text() );
    });
    $("p").one( "click", fun...)    //one 绑定一个一次性的事件处理函数
    $("p").unbind( "click" )        //解绑一个事件
##### 事件委托
    // 与bind 不同的是当时间发生时才去临时绑定。
    $("p").delegate("click",function(){
    do something...
    });

    $("p").undelegate();    　　　//p元素删除由 delegate() 方法添加的所有事件
    $("p").undelegate("click")   //从p元素删除由 delegate() 方法添加的所有click事件
##### 常用事件
    $(window).unload()     //用户离开页面时
    $("p").click();    　　//单击事件
    $("p").dblclick();    //双击事件
    $("input[type=text]").focus()  //元素获得焦点时,触发 focus 事件
    $("input[type=text]").blur()   //元素失去焦点时,触发 blur事件
    $("button").mousedown()//当按下鼠标时触发事件
    $("button").mouseup()  //元素上放松鼠标按钮时触发事件
    $("p").mousemove()     //当鼠标指针在指定的元素中移动时触发事件
    $("p").mouseover()     //当鼠标指针位于元素上方时触发事件
    $("p").mouseout()    　//当鼠标指针从元素上移开时触发事件
    $(window).keydown()    //当键盘或按钮被按下时触发事件
    $(window).keypress()   //当键盘或按钮被按下时触发事件,每输入一个字符都触发一次
    $("input").keyup()     //当按钮被松开时触发事件
    $(window).scroll()     //当用户滚动时触发事件
    $(window).resize()     //当调整浏览器窗口的大小时触发事件
    $("input[type='text']").change()    //当元素的值发生改变时触发事件
    $("input").select()    //当input 元素中的文本被选择时触发事件
    $("form").submit()     //当提交表单时触发事件

#### JQ自带的效果
    基本
    $("p").show()    　　　　//显示隐藏的匹配元素
    $("p").show("slow");    //参数表示速度,("slow","normal","fast"),也可为900毫秒
    $("p").hide()    　　　　//隐藏显示的元素
    $("p").toggle();   　　 //切换 显示/隐藏
    滑动
    $("p").slideDown("900");    //用900毫秒时间将段落滑下
    $("p").slideUp("900");    　//用900毫秒时间将段落滑上
    $("p").slideToggle("900");  //用900毫秒时间将段落滑上，滑下
    淡入淡出
    $("p").fadeIn("900");    　　  //用900毫秒时间将段落淡入
    $("p").fadeOut("900");    　　 //用900毫秒时间将段落淡出
    $("p").fadeToggle("900");    　//用900毫秒时间将段落淡入,淡出
    $("p").fadeTo("slow", 0.6);    //用900毫秒时间将段落的透明度调整到0.6
#### JQ对象访问
    $.trim() 　　//去除字符串两端的空格
    $.each() 　　//遍历一个数组或对象，for循环
    $.inArray() //返回一个值在数组中的索引位置，不存在返回-1  
    $.grep() 　 //返回数组中符合某种标准的元素
    $.extend()  //将多个对象，合并到第一个对象
    $.makeArray() //将对象转化为数组
    $.type()    //判断对象的类别（函数对象、日期对象、数组对象、正则对象等等
    $.isArray() //判断某个参数是否为数组
    $.isEmptyObject() //判断某个对象是否为空(不含有任何属性)
    $.isFunction()    //判断某个参数是否为函数
    $.isPlainObject() //判断某个参数是否为用"{}"或"new Object"建立的对象
    $.support()       //判断浏览器是否支持某个特性

#### 给$身上添加自己定义的方法

#### JQ ajax
    https://www.cnblogs.com/jpfss/p/7491167.html
##### $.ajax
beforeSend(XHR)
    类型：Function
    发送请求前可修改 XMLHttpRequest 对象的函数，如添加自定义 HTTP 头。
    XMLHttpRequest 对象是唯一的参数。
    这是一个 Ajax 事件。如果返回 false 可以取消本次 ajax 请求。
type
    类型：String
    默认值: "GET")。请求方式 ("POST" 或 "GET")， 默认为 "GET"。注意：其它 HTTP 请求方法，如 PUT 和 DELETE 也可以使用，但仅部分浏览器支持。
url
    类型：String
    默认值: 当前页地址。发送请求的地址。
timeout
    类型：Number
    设置请求超时时间（毫秒）。此设置将覆盖全局设置。
success
    当请求之后调用。传入返回后的数据，以及包含成功代码的字符串。
complete
    当请求完成之后调用这个函数，无论成功或失败。传入 XMLHttpRequest 对象，以及一个包含成功或错误代码的字符串
data
    类型：String
    发送到服务器的数据。将自动转换为请求字符串格式。GET 请求中将附加在 URL 后。查看 processData 选项说明以禁止此自动转换。必须为 Key/Value 格式。如果为数组，jQuery 将自动为不同值对应同一个名称。如 {foo:["bar1", "bar2"]} 转换为 '&foo=bar1&foo=bar2'。
##### $.get
     jQuery.get( url, [data], [callback] )：使用GET方式来进行异步请求
        参数：
        url (String) :  发送请求的URL地址.
        data (Map) : (可选) 要发送给服务器的数据，以 Key/value 的键值对形式表示，会做为QueryString附加到请求URL中。
        callback (Function) : (可选) 载入成功时回调函数(只有当Response的返回状态是success才是调用该方法)。
        
        jQuery.get()回调函数里面的 this ，指向的是Ajax请求的选项配置信息：

##### $.post
    jQuery.post( url, [data], [callback], [type] ) ：使用POST方式来进行异步请求
    参数
    url (String) : 发送请求的URL地址.
    data (Map) : (可选) 要发送给服务器的数据，以 Key/value 的键值对形式表示。
    callback (Function) : (可选) 载入成功时回调函数(只有当Response的返回状态是success才是调用该方法)。
    type (String) : (可选)官方的说明是：Type of data to be sent。其实应该为客户端请求的类型(JSON,XML,等等)