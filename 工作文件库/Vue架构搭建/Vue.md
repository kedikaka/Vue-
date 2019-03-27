### Vue 项目搭建第一步
#### 环境安装
    （1）安装node npm webpack vue-cli
    (2) -S 生产环境
    (3) -D 开发环境
    (4) -g 全局安装
#### 配置sass环境
    https://www.cnblogs.com/crazycode2/p/6535105.html
    (1) 第一步：安装node-sass sass-loader
    (2) 第二步：build>webpack.base.conf.js----modules内的rules中加一个对象
    {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
      （3）可以直接用了
#####  安装的sass模块
#### 跨域问题
##### 配置proxyTable{}，设置代理跨域
    （第一步）
    （第二步）
    （第三步）
##### nginx反向代理

#### assets和static的区别

##### 图片打包之后的路径问题（静态资源）

#### 打包之后的map文件

##### 去掉文件的方法
    运行 cnpm run build 开始打包后会在项目目录下自动创建dist目录，打包好的文件都在其中 
    解决办法：去src/config/index.js中改一个参数： 
    productionSourceMap:false 
    把这个改为false。不然在最终打包的文件中（dist>static>js--存在map文件）会出现一些map文件
    https://blog.csdn.net/qq_25479327/article/details/79625621 
##### map文件的作用
    map文件的作用：项目打包后，代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确得知是哪里的代码报错。 
    有了map就可以像未加密的代码一样，准确的输出是哪一行哪一列有错。


### Vue 项目搭建
    搭建过程：（1）--使用vue-cli创建基本项目（2）配置sass语法（3）配置ES6语法（4）配置vux(5)配置路由管理（6）配置代理跨域（7）配置axios解决数据请求（8）引入UI框架-Mint UI或者Element UI

### Vue封装自定义指令

### Vue封装功能组件

### Vue 实例属性：
    Vue 实例还暴露了一些有用的实例属性与方法。它们都有前缀 $，以便与用户定义的属性区分开来
### 响应式
#### 在data中声明的属性可以实现响应式
    直接Vm.data1='数据一'，这种数据是不可以响应的。
    Object.freeze() 方法可以冻结一个对象，冻结指的是不能向这个对象添加新的属性，不能修改其已有属性的值，不能删除已有属性，以及不能修改该对象已有属性的可枚举性、可配置性、可写性。该方法返回被冻结的对象。
### Mustach语法 
    Mustach不能作用于HTML特性上(也就是不能直接作用于元素的属性)
    Mustach语法中可以使用简单的JS表达式，比如++，--，？：等等表达式，但是不能使用流程控制语句了（例如if）
### Vue指令系统
#### 指令的概念
    指令 (Directives) 是带有 v- 前缀的特殊特性。指令特性的值预期是单个 JavaScript 表达式 (v-for 是例外情况，稍后我们再讨论)。
#### 指令的作用
    指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM。
#### 指令参数
    一些指令能够接收一个“参数”，在指令名称之后以冒号表示。例如，v-bind 指令可以用于响应式地更新 HTML 特性：
<a v-bind:href="url">...</a>
    在这里 href 是参数，告知 v-bind 指令将该元素的 href 特性与表达式 url 的值绑定。

#### 指令修饰符
    修饰符 (Modifiers) 是以半角句号 . 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。

#### 常用的Vue指令
##### v-once 指令，你也能执行一次性地插值
    当数据改变时，插值处的内容不会更新。
    <span v-once>这个将不会改变: {{ msg }}</span>
##### V-html指令
    {{}}会将数据解释为普通的文本，并非是HTML代码。
    v-html指令，可以解析字符串中的HTML代码
     <span v-html="rawHtml"></span>
##### V-bind指令
    给元素绑定属性：<button v-bind:disabled="isButtonDisabled">Button</button>
    简写
    <!-- 完整语法 -->
    <a v-bind:href="url">...</a>
    <!-- 缩写 -->
    <a :href="url">...</a>
###### 绑定HTML class
    v-bind:class 一个对象，以动态地切换 class：-----------(键名是：className,键值：boolean)表示当前类名存在与否
    <div v-bind:class="{ active: isActive }"></div>

#######    有三种添加class的格式：
    当在一个自定义组件上使用 class 属性时，这些类将被添加到该组件的根元素上面。这个元素上已经存在的类不会被覆盖。
########   对象语法 
   <div v-bind:class="{ active: isActive }"></div>
        data: {
            isActive: true,
            hasError: false
        }

    <div v-bind:class="classObject"></div>
    data: {
        classObject: {
            active: true,
            'text-danger': false
        }
    }
  <div v-bind:class="classObject"></div> 
    computed: {
        classObject: function () {
            return {
            active: this.isActive && !this.error,
            'text-danger': this.error && this.error.type === 'fatal'
            }
        }
    }

########   数组语法 
    <div v-bind:class="[activeClass, errorClass]"></div>
    数组中可以使用表达式语法，也可以使用对象语法
###### 绑定HTML 内联样式
    v-bind:style 的对象语法十分直观——看着非常像 CSS，但其实是一个 JavaScript 对象。CSS 属性名可以用驼峰式 (camelCase) 或短横线分隔 (kebab-case，记得用单引号括起来) 来命名：

    当 v-bind:style 使用需要添加浏览器引擎前缀的 CSS 属性时，如 transform，Vue.js 会自动侦测并添加相应的前缀。
##### v-on指令
    <!-- 完整语法 -->
    <a v-on:click="doSomething">...</a>
    <!-- 缩写 -->
    <a @click="doSomething">...</a>
##### v-if v-else
    v-if：是通过元素的创建和移除来实现元素的显示和隐藏的。
##### v-if和v-for同时使用：
    不推荐同时使用，v-for拥有比v-if更高的优先级
##### v-show
    v-show：不支持template元素和不支持v-else指令
    v-show:操作的是元素的display:来实现元素的显示和隐藏的。
##### V-show和v-if对比分析
    v-if vs v-show
    v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。
    v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。
    相比之下，v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。
    一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。
##### v-if v-for
    v-if 和v-for同时使用的时候，v-for拥有更高的优先级。
#### v-for 列表渲染
##### v-for渲染数组
    itme---数组元素，index----数组对应下标
    <li v-for="(item, index) in items">
        {{ parentMessage }} - {{ index }} - {{ item.message }}
    </li>
##### v-for渲染对象
    遍历对象身上的属性：value---对象的对应属性的属性值，key----对象的对应键值,index表示对应属性的下标（从0开始）
    <div v-for="(value, key，index) in object">
         {{ key }}: {{ value }}
    </div>
##### v-for列表渲染的时候key关键字的作用
    当 Vue.js 用 v-for 正在更新已渲染过的元素列表时，它默认用“就地复用”策略。如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序， 而是简单复用此处每个元素，并且确保它在特定索引下显示已被渲染过的每个元素。
    为了给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，你需要为每项提供一个唯一 key 属性。理想的 key 值是每项都有的唯一 id。这个特殊的属性相当于 Vue 1.x 的 track-by ，但它的工作方式类似于一个属性，所以你需要用 v-bind 来绑定动态值 (在这里使用简写)：
    <div v-for="item in items" :key="item.id">
    <!-- 内容 -->
    </div>
### Vue数组更新检测

   #### 操作数组不触发视图更新的情况
    由于 JavaScript 的限制，Vue 不能检测以下变动的数组：
        当你利用索引直接设置一个项时，例如：vm.items[indexOfItem] = newValue
        当你修改数组的长度时，例如：vm.items.length = newLength
    解决方法：
        (1) 全局方法：Vue.set(vm.items, indexOfItem, newValue)
        (2) 实例方法：vm.$set(vm.items, indexOfItem, newValue)
        （3）不适用索引或者数组长度，操作数组，使用变异数组，或者替换数组
   #### 操作数组触发视图更新的情况
    push()
    pop()
    shift()
    unshift()
    splice()
    sort()
    reverse()
    原数组改变，就会使得视图更新
   #### 采用替换数组的方式，使得视图更新
    filter(), concat() 和 slice() 。这些不会改变原始数组，但总是返回一个新数组。
    可以用新数组替换旧数组：
    example1.items = example1.items.filter(function (item) {
    return item.message.match(/Foo/)
    })
    Vue 为了使得 DOM 元素得到最大范围的重用而实现了一些智能的、启发式的方法，所以用一个含有相同元素的数组去替换原来的数组是非常高效的操作。
### Vue对象更新检测
    由于 JavaScript 的限制，Vue 不能检测对象属性的添加或删除：
#### Vue响应式原理---------？？？？？？？？？？？？？？？？？？？？
#### Vue添加对象属性 
    Vue实例中data内的属性是可以响应的
    （1）直接vm.attr1,那么新添加的这个属性，是不响应的。

    解决方案:
        你可以添加一个新的 age 属性到嵌套的 userProfile 对象：
        Vue.set(vm.userProfile, 'age', 27)

        你还可以使用 vm.$set 实例方法，它只是全局 Vue.set 的别名：
        vm.$set(vm.userProfile, 'age', 27)
    情景：为已有的对象，添加多个新的属性：
        使用 Object.assign() 或 _.extend()
    注意点：不要原对象的身上合并：
        Object.assign(vm.userProfile, {age: 27,favoriteColor: 'Vue Green'})
    解决方案：在一个新的空对象的身上合并两个对象的属性。
    vm.userProfile = Object.assign({}, vm.userProfile, {
        age: 27,
        favoriteColor: 'Vue Green'
    })
### Vue 计算属性-（computed，带缓存）---观察和响应 Vue 实例上的数据变动
    计算属性默认只有getter方法，如果我们需要set方法，我们可以手动写。
### Vue 事件系统
    （1）绑定事件：
        v-on：click='event1'
        @click='event1'
    （2）在methods:中定义事件处理函数
    （3）传入事件对象：在绑定事件的时候，通过$event，传入原生的事件对象
    （4） v-on.修饰符
    （5）按键修饰符
        自定义按键别名
            config.keyCodes 对象自定义按键修饰符别名：
            // 可以使用 `v-on:keyup.f1`
            Vue.config.keyCodes.f1 = 112
#### 计算属性的缓存
    计算属性是基于它们的依赖进行缓存的。只在相关依赖发生改变时它们才会重新求值。这就意味着只要依赖项还没有发生改变，多次访问 reversedMessage 计算属性会立即返回之前的计算结果，而不必再次执行函数。
#### 计算属性缓存的好处
    在每次触发重新渲染的时候：
    如果模板中调用了methods,那么每次触发重新渲染的时候，methods中被调用的函数，都会重新执行。
    如果模板中调用了computed中的方法，那么每次触发重新渲染的时候，只有当前的计算属性中的依赖项发生了变化的时候，才会重新执行对应的函数。如果依赖项没有发生变化，那么就会上一次的执行结果，也就是缓存。对应的函数不会重新执行。
------当我们需要缓存的时候，我们可以使用计算属性，当我们不需要缓存的时候，我们可以使用methods,或者watch。
#### 计算属性的set
    computed: {
    fullName: {
            // getter
            get: function () {
            return this.firstName + ' ' + this.lastName
            },
            // setter
            set: function (newValue) {
            var names = newValue.split(' ')
            this.firstName = names[0]
            this.lastName = names[names.length - 1]
            }
        }
    }
### 侦听属性-(watch，不带缓存)---观察和响应 Vue 实例上的数据变动
    如果模板中调用了侦听属性，那么在每次重新渲染的时候，都会重新执行函数
### Vue侦听器-(watch)---??????????????
    当需要在数据变化时执行异步或开销较大的操作时，watch方式是最有用的。
### Vue生命周期
    生命周期钩子的 this 上下文指向调用它的 Vue 实例。--（生命周期函数，不能使用箭头函数），箭头函数中的this，指向的是定义的时候的上下文。function中的this，指向的是调用它的那个对象（调用的时候的上下文）
    
    不要在选项属性或回调上使用箭头函数

    每个 Vue 实例在被创建时都要经过一系列的初始化过程——例如，需要设置数据监听、编译模板、将实例挂载到 DOM 并在数据变化时更新 DOM 等。同时在这个过程中也会运行一些叫做生命周期钩子的函数。
### Vue组件系统
#### Vue组件中的data必须是一个函数
    在组件复用的时候，如果data是一个对象，那么所有复用的实例，都操作的是一个data，会相互影响。我们希望在组件复用的时候，每一个组件都拥有自己的data对象。
    一个组件的 data 选项必须是一个函数，因此每个实例可以维护一份被返回对象的独立的拷贝。
#### 组件注册
    （1）全局注册：
        这些组件是全局注册的。也就是说它们在注册之后可以用在任何新创建的 Vue 根实例 (new Vue) 的模板中。
        Vue.component('my-component-name', {
            // ... 选项 ...
        })
    （2）局部注册：
        局部注册的组件，在其子组件中是不可用的。如果一定要用，那么子组件中也需要注册
        new Vue({
            el: '#app',
            components: {
                'component-a': ComponentA,
                'component-b': ComponentB
            }
        })
#### 组件中prop的使用
    （1）prop的数据流向是单向，也就是只能由父组件流向子组件。不能在子组件中修改父组件中的值。
    （2）在子组件中修改父组件传递下来的prop的方法
        方法一：新建一个属性，将父组件中传递下来的prop作为初始值，然后操作自身的这个新的属性。
        方法二：利用计算属性
     （3）prop可以规定传入的prop的数据类型。