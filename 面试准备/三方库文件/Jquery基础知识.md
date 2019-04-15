##
这里放的是JQ的常用知识

### jQuery获取的dom对象和原生的dom对象有何区别？
js原生获取的dom是一个对象， jQuery对象就是一个数组对象， 其实就是选择出来的元素的数组集合， 所以说他们两者是不同的对象类型不等价。
原生DOM对象转jQuery对象：
var box = document.getElementById('box');
var $box = $(box);
jQuery对象转原生DOM对象：
var $box = $('#box');
var box = $box[0];

### jQuery如何扩展自定义方法
(jQuery.fn.myMethod =
    function () {
        alert(
            'myMethod'
        );
    })
// 或者：
(function ($) {
    $.fn.extend({
        myMethod: function () {
            alert(
                'myMethod'
            );
        }
    })
})(jQuery)