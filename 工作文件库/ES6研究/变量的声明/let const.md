## 声明变量的方式
    ES5中声明变量的方式：var function
    ES6中声明变量的方式:let const class import
### let const var 

#### 作用域
    let声明的变量具有块级作用域的概念，let声明的变量只能在当前块内可以访问，块级作用域之外不可以访问.----自带闭包特性
    实际应用：
    for循环中的计数器就很适合使用let来声明。计数器只在循环体内有效。

    var 声明的变量在全局范围内有效
#### 变量提升
    var 声明的变量存在声明提升，let声明的变量不存在声明提升。
    let声明的变量，必须先声明后使用。

    var x = x;undefined
    let x = x;报错
#### 暂时性死区
    暂时性死区的本质就是，只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量。

    假如在当前作用域块内使用了let声明变量‘aaa’,那么在当前作用域内，在let声明变量之前都是不可以使用变量‘aaa’。即使全局作用域内存在变量‘aaa’。

##### 暂时性死区引起的typeof报错
    （1）使用typeof判断一个没有声明的变量的类型时候，返回的是undefined
     (2) 假如一个变量使用let声明，但是在声明之前使用了typeof来判断当前变量的类型，那么此时就会报错，该变量没有声明  ·
#### 变量不允许重复声明
    let 声明的变量不允许重复声明

#### 块级作用域
    ES5中只有全局作用域和函数作用域，没有块级作用域
    let为ES6新增了块级作用域
    (1)ES6允许块级作用域随意嵌套
    （2）外层作用域无法读取内层作用域中的变量
    （3）内层作用域可以定义和外层作用域相同的变量名

### const
#### const 初始化
    声明的是一个只读的常量，一旦声明常量的值就不能改变。
    所以const在声明变量的时候，一旦声明就必须初始化
#### 作用域
    const 作用域和let相同，只在声明所在的块级作用域内有效
#### 暂时性死区
    const 和 let声明变量一样存在暂时性死区，只能先声明后使用
#### 不能重复声明
#### const的本质
    const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，const只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了。

#### cosnt在引用类型数据上的问题
    const只是保证对应变量保存的值不变，引用类型中保存的是引用数据的地址。
    所以引用类型数据如果需要一直不变，就要冻结对象。
#### 冻结对象
    Object.freeze()方法
    const foo = Object.freeze({});

    对象彻底冻结的函数。
    var constantize = (obj) => {
    Object.freeze(obj);
    Object.keys(obj).forEach( (key, i) => {
        if ( typeof obj[key] === 'object' ) {
        constantize( obj[key] );
        }
    });
    };
#### 顶层对象的属性
    （1）顶层对象：在浏览器中指的是window对象，在node中指的是global独享。
    （2）ES5中顶层对象的属性和全局变量是一样的。
    ES6 为了改变这一点，一方面规定，为了保持兼容性，var命令和function命令声明的全局变量，依旧是顶层对象的属性；另一方面规定，let命令、const命令、class命令声明的全局变量，不属于顶层对象的属性。也就是说，从 ES6 开始，全局变量将逐步与顶层对象的属性脱钩。
### for 循环的作用域问题
    循环变量和循环体拥有各自的作用域，当时用let声明变量的时候，这种作用域才会体现出来。但是如果使用var声明的变量，那么这种作用域就不会体现出来。

    for循环还有一个特别之处，就是设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域。
    for (let i = 0; i < 3; i++) {
    let i = 'abc';
    console.log(i);
    }
    // abc
    // abc
    // abc
    上面代码正确运行，输出了 3 次abc。这表明函数内部的变量i与循环变量i不在同一个作用域，有各自单独的作用域。

