<template>
  <div id="app">
      <p>{{'hahha'}}</p>
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return {
      'hahha':'我是第一次测试'
    }
  },
  components: {
    
  },
  created:function(){
    console.log(this.hahha);
    // http://contest1.51limahui.com/redpacket/checkRedPacket
    this.$axios.get('/apis/redpacket/checkRedPacket').then((res)=>{
      console.log(res)
    })
   
    //  this.$axios.get('apis/search').then((res)=>{
    //   console.log(res)
    // })
  }
}
</script>

<style lang='scss'>
$sss:red;
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: $sss;
  background: url('../static/images/20120823175210_HnQJc.jpeg');
  height: 500px;
}

</style>
