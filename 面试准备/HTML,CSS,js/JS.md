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
Promise的三种状态

Promise和setTimeout执行先后的区别

Promise有没有解决异步的问题（promise链是真正强大的地方）

Promise 和 async/await 和 callback的区别 
### 对async、await的理解，内部原理 

### 介绍暂时性死区

### call、apply、bind的区别

### JS常见的作用域问题
https://mp.weixin.qq.com/s/CJrrwqwJDyYxUS8tlDC-HQ