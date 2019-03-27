<template>
    <div>
        <p v-if="pTrue">我是v-if渲染的内容</p>
        <p v-else>我是v-else渲染的内容</p>
        <p v-show="pTrue">我是v-show渲染的内容</p>
        <div @click="changePt">

        </div>
        <ul v-for="(item,index) in arr1">
            <li>{{item}}{{index}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            'pTrue':false,
            arr1:['你好1','你好2','你好3','你好4']
        }
    },
    methods:{
        changePt:function(){
            this.pTrue=!this.pTrue;
        }
    }
}
</script>

<style lang="scss" scoped>
$mycolor:green;
p{background: $mycolor;}
div{width: 100px;height: 100px;background: red;}
</style>


