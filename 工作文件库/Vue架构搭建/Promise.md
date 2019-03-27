Promise 研究学习
### Promise出现的原因
    Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。
    所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。
### Promise 分析
    有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。
    Promise对象的状态改变，只有两种可能：从pending变为fulfilled和从pending变为rejected。只要这两种情况发生，状态就凝固了，不会再变了

### Promsie 的缺点
    　Promise对象有缺点:
　　1，无法取消Promise，一旦新建它就会立即执行。
　　2，如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。
　　3，当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。
### Promise中的方法

#### then
    then方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例）。因此可以采用链式写法，即then方法后面再调用另一个then方法。
#### catch
    Promise.prototype.catch方法是.then(null, rejection)的别名，用于指定发生错误时的回调函数。
    一个 Promise 对象，如果该对象状态变为resolved，则会调用then方法指定的回调函数；如果异步操作抛出错误，状态就会变为rejected，就会调用catch方法指定的回调函数，处理这个错误。另外，then方法指定的回调函数，如果运行中抛出错误，也会被catch方法捕获。

    Promise 对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止。也就是说，错误总是会被下一个catch语句捕获。
　　一般来说，不要在then方法里面定义Reject状态的回调函数（即then的第二个参数），总是使用catch方法。
    Promise 对象后面要跟catch方法，这样可以处理 Promise 内部发生的错误。catch方法返回的还是一个 Promise 对象，因此后面还可以接着调用then方法。
#### all
    Promise.all方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。
    　　var p = Promise.all([p1, p2, p3]); 
    p的状态由p1、p2、p3决定，分成两种情况：
　　　　（1）只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。
　　　　（2）只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。
#### race
    Promise.race方法同样是将多个Promise实例，包装成一个新的Promise实例。
　　 var p = Promise.race([p1, p2, p3]); 上面代码中，只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数。
#### resolve
#### reject


### Promise 封装Ajax

### 手写Promise