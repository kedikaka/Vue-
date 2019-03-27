<template>
    <div>
        <input type="text" v-model="inText">
        <p>{{inTextReserve}}</p>
    </div>
</template>
<script>
export default {
    data(){
        return {
            inText:''
        }
    },
    computed:{
        inTextReserve:function(){
            return this.inText.split('').reverse().join('') 
        }
    }
}
</script>

<style lang="scss" scoped>
$pColor:yellow;
p{
    background: $pColor;
}
</style>


