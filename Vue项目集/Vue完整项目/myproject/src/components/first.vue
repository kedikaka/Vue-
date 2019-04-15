<template>
    <div id="first">
        <p>这是first页面</p>
    </div>
</template>
<script>
export default {
    data:()=>{
        return {

        }
    },
    beforeRouteEnter(to,from,next){
        next(vm=>{
            // 通过vm访问实例
        })
    }
}
</script>
<style scoped>

</style>


