## 这里放的是JS常见的面试题

### JS深拷贝和浅拷贝

### 遍历数组和对象的方法

### JS原型和原型链

### JS继承

### 描述一下this

this，函数执行的上下文，可以通过apply，call，bind改变this的指向。对于匿名函数或者直接调用的函数来说，this指向全局上下文（浏览器为window，nodejs为global），剩下的函数调用，那就是谁调用它，this就指向谁。当然还有es6的箭头函数，箭头函数的指向取决于该箭头函数声明的位置，在哪里声明，this就指向哪里。

### JS执行上下文和执行栈

### 关于闭包，let,var的for循环问题

### 函数防抖和函数节流

### 事件流
事件流分为两种，捕获事件流和冒泡事件流。
捕获事件流从根节点开始执行，一直往子节点查找执行，直到查找执行到目标节点。
冒泡事件流从目标节点开始执行，一直往父节点冒泡查找执行，直到查到到根节点。
事件流分为三个阶段，一个是捕获节点，一个是处于目标节点阶段，一个是冒泡阶段。

### 手写一个Promise

### 介绍promise
 #### Promise的三种状态
    pending（进行中）、fulfilled（已成功）和rejected（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。
 #### Promise的缺点
　　1，无法取消Promise，一旦新建它就会立即执行。
　　2，如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。
　　3，当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。
 #### Promise和setTimeout执行先后的区别
    promise先执行
 #### Promise常用的几个方法
    
  （1） then
    then方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例）。因此可以采用链式写法，即then方法后面再调用另一个then方法。
  （2） catch
    Promise.prototype.catch方法是.then(null, rejection)的别名，用于指定发生错误时的回调函数。
    一个 Promise 对象，如果该对象状态变为resolved，则会调用then方法指定的回调函数；如果异步操作抛出错误，状态就会变为rejected，就会调用catch方法指定的回调函数，处理这个错误。另外，then方法指定的回调函数，如果运行中抛出错误，也会被catch方法捕获。

    Promise 对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止。也就是说，错误总是会被下一个catch语句捕获。
　　一般来说，不要在then方法里面定义Reject状态的回调函数（即then的第二个参数），总是使用catch方法。
    Promise 对象后面要跟catch方法，这样可以处理 Promise 内部发生的错误。catch方法返回的还是一个 Promise 对象，因此后面还可以接着调用then方法。
  （3） all
    Promise.all方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。
    　　var p = Promise.all([p1, p2, p3]); 
    p的状态由p1、p2、p3决定，分成两种情况：
　　　　（1）只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。
　　　　（2）只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。
 （4） race
    Promise.race方法同样是将多个Promise实例，包装成一个新的Promise实例。
    　　 var p = Promise.race([p1, p2, p3]); 上面代码中，只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数
    Promise有没有解决异步的问题（promise链是真正强大的地方）
 （5）resolve
    Promise.resolve方法允许调用时不带参数，直接返回一个resolved状态的 Promise 对象。
 （6）reject
    将一个promise对象的状态变为rejected
### 对async、await的理解，内部原理 

### Promise 和 async/await 和 callback的区别 
### 介绍暂时性死区

### call、apply、bind的区别

### JS常见的作用域问题
https://mp.weixin.qq.com/s/CJrrwqwJDyYxUS8tlDC-HQ