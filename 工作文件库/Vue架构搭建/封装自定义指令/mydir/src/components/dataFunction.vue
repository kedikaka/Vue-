<template>
    <div>
        <p>这是数字{{nm}}</p>
        <div class="btn" @click="addNum">
            数字加
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            nm:222
        }
    },
    methods:{
        addNum:function(){
            this.num+=2;
        }
    }
}
</script>

<style lang="scss" scoped>
$bgc:green;
.btn{
    width: 50px;
    height: 50px;
    background: $bgc;
}
</style>


