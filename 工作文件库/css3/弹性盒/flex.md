# http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html
## 布局方案
    布局的传统解决方案，基于盒状模型，依赖 display 属性 + position属性 + float属性。它对于那些特殊布局非常不方便，比如，垂直居中就不容易实现。
### 设置弹性盒
    设为 Flex 布局以后，子元素的float、clear和vertical-align属性将失效。
    任何一个容器都可以指定为 Flex 布局。
    .box{
        display: flex;
    }
    行内元素也可以使用 Flex 布局。
    .box{
        display: inline-flex;
    }
    Webkit 内核的浏览器，必须加上-webkit前缀。
    .box{
        display: -webkit-flex; /* Safari */
        display: flex;
    }
   #### 以下六个属性设置在容器上
     flex-direction 主轴方向
        有四个值：row（默认值）：主轴为水平方向，起点在左端。（自左向右排列）
                row-reverse：主轴为水平方向，起点在右端。
                column：主轴为垂直方向，起点在上沿。（自上向下排列）
                column-reverse：主轴为垂直方向，起点在下沿。
     flex-wrap 项目在当前轴线上排列不下的时候，是否换行以及如何换行
        有三个值：nowrap（默认）：不换行。
                 wrap：换行，第一行在上方。
                 wrap-reverse：换行，第一行在下方。
     flex-flow  flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。
        第一个值表示轴向，第二个值表示是否换行
     justify-content  项目在主轴上的对齐方式
        有五个值：
            flex-start: 默认值，与主轴开始位置对齐
            flex-end： 与主轴结束位置对齐
            center：与主轴中心位置对齐
            space-between：两端对齐，项目之间的间隔都相等。
            space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。
     align-items：属性定义项目在交叉轴上如何对齐。
        flex-start：交叉轴的起点对齐。
        flex-end：交叉轴的终点对齐。
        center：交叉轴的中点对齐。
        baseline: 项目的第一行文字的基线对齐。
        stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。
     align-content：
        align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。
   #### 以下六个属性设置在项目上
     order：属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。
     flex-grow：属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
        如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。
        常用：flex-grow:1;其他项目flex-grow:0(默认就是0);表示当前元素占据所有的剩余空间
     flex-shrink：属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
        如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。
     flex-basis：属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。
        它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。
     flex： flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。
        auto (1 1 auto) 和 none (0 0 auto)。
        建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。
     align-self： align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。 