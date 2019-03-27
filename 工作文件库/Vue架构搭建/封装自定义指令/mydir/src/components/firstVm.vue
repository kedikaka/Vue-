<template>
    <div>
        <ul>
            <p v-for=" item in arr ">{{item}}</p>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            arr:['我是第一个元素','我是第二个元素','我是第三个元素']
        }
    },

}
</script>

<style lang="scss" scoped>

</style>


