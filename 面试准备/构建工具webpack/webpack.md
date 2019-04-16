### 你说一下webpack的一些plugin，怎么使用webpack对项目进行优化。

构建优化：

减少编译体积 ContextReplacementPugin、IgnorePlugin、babel-plugin-import、babel-plugin-transform-runtime
并行编译 happypack、thread-loader、uglifyjsWebpackPlugin开启并行
缓存 cache-loader、hard-source-webpack-plugin、uglifyjsWebpackPlugin开启缓存、babel-loader开启缓存
预编译 dllWebpackPlugin && DllReferencePlugin、auto-dll-webapck-plugin
性能优化：

减少编译体积 Tree-shaking、Scope Hositing
hash缓存 webpack-md5-plugin
拆包 splitChunksPlugin、import()、require.ensure
Q3 es6 class 的new实例和es5的new实例有什么区别
这个我觉得是一样的（当时因为很少看babel编译之后的结果），面试官说不一样。。。后来我看了一下babel的编译结果，发现只是类的方法声明的过程不一样而已，最后new的结果是一样的。。。具体答案现在我也不知道。。